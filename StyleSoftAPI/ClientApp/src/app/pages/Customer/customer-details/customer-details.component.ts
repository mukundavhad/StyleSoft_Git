import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { CustomerDetailsService } from '../customer-view/customerdetails.service';
import { DialogRef } from '../../../dialog/dialog-ref';

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerDetailsComponent implements OnInit   {
    public customerForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef,private formBuilder: FormBuilder, private http: HttpClient, private customerdetailsservice: CustomerDetailsService) {
  }

    ngOnInit() {

        this.customerForm = this.formBuilder.group({
            CustomerId: [0],
            CustomerName: [],
            CustomerMobile: [],
            RelationType: [],
            Gender: [],
            //DateofBirth: [],
            AlternateContact: [],
            EmailId: [],
        });
    }

    

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let customerdetails = this.customerForm.value;
        this.http.post(this.isEditable ? APP_CONSTANT.CUSTOMERDETAILS.EDIT : APP_CONSTANT.CUSTOMERDETAILS.ADD, customerdetails, httpOptions)
            .subscribe((customerdetails) => {
                // login successful if there's a jwt token in the response
                if (customerdetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(customerdetails);
                }
                return customerdetails;
            });
    }
}


 
