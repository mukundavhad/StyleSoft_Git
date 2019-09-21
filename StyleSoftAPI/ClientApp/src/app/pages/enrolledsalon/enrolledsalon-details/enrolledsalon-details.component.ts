import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { EnrolledSalonDetailsService } from '../enrolledsalon-view/enrolledsalondetails.service';
import { DialogRef } from '../../../dialog/dialog-ref';

@Component({
    selector: 'app-enrolledsalon-details',
    templateUrl: './enrolledsalon-details.component.html',
    styleUrls: ['./enrolledsalon-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnrolledSalonDetailsComponent implements OnInit   {
    public enrolledsalonForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef,private formBuilder: FormBuilder, private http: HttpClient, private enrolledsalondetailsservice: EnrolledSalonDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.enrolledsalonForm = this.formBuilder.group({
            EnrolledSalonId: [0],
            SalonOwnerMobile: [],
            SalonOwnerName: [],
            SalonOwnerEmailId: [],
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let enrolledsalondetails = this.enrolledsalonForm.value;
        this.http.post(this.isEditable ? APP_CONSTANT.ENROLLEDSALONDETAILS.EDIT : APP_CONSTANT.ENROLLEDSALONDETAILS.ADD, enrolledsalondetails, httpOptions)
            .subscribe((enrolledsalondetails) => {
                //login successful if there's a jwt token in the response
                if (enrolledsalondetails) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(enrolledsalondetails);
                }
                return enrolledsalondetails;
            });
    }
}


 
