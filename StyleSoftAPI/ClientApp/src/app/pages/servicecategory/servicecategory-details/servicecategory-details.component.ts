import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { ServiceCategoryDetailsService } from '../servicecategory-view/servicecategorydetails.service';

@Component({
    selector: 'app-servicecategory-details',
    templateUrl: './servicecategory-details.component.html',
    styleUrls: ['./servicecategory-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceCategoryDetailsComponent implements OnInit   {
    public servicecategoryForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private servicecategorydetailsservice: ServiceCategoryDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.servicecategoryForm = this.formBuilder.group({
            CategoryId: [0],
            CategoryName: [],
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let servicecategorydetails = this.servicecategoryForm.value;
        this.http.post(this.isEditable ? APP_CONSTANT.SERVICECATEGORYDETAILS.EDIT : APP_CONSTANT.SERVICECATEGORYDETAILS.ADD, servicecategorydetails, httpOptions)
            .subscribe((servicecategorydetails) => {
                //login successful if there's a jwt token in the response
                if (servicecategorydetails) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(servicecategorydetails);
                }
                return servicecategorydetails;
            });
    }
}


 
