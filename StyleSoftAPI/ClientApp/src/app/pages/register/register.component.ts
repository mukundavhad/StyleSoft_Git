import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../config';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
    public router: Router;
    public form: FormGroup;
    public isEditable: boolean = false;
    public SalonOwnerMobile: AbstractControl;
    public SalonOwnerName: AbstractControl;
    public SalonOwnerEmailId: AbstractControl;
    public confirmPassword: AbstractControl;

    constructor(router: Router, private http: HttpClient, fb: FormBuilder) {
        this.router = router;
        this.form = fb.group({
            SalonOwnerName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            SalonOwnerEmailId: ['', Validators.compose([Validators.required, emailValidator])],
            SalonOwnerMobile: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
        }),

        this.SalonOwnerName = this.form.controls['SalonOwnerName'];
        this.SalonOwnerEmailId = this.form.controls['SalonOwnerEmailId'];
        this.SalonOwnerMobile = this.form.controls['SalonOwnerMobile'];
    }



    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        if (this.form.valid) {

            let enrolledsalondetails = values;
            this.http.post(this.isEditable ? APP_CONSTANT.ENROLLEDSALONDETAILS.EDIT : APP_CONSTANT.ENROLLEDSALONDETAILS.ADD, enrolledsalondetails, httpOptions)
                .subscribe((enrolledsalondetails) => {
                    //login successful if there's a jwt token in the response
                    if (enrolledsalondetails) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        this.router.navigate(['/saloon']);
                    }
                    //return enrolledsalondetails;
                });
        }

        //console.log(values);
        //this.router.navigate(['/login']);
    }

    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}



