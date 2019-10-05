import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { AddressDetailsService } from '../address-view/addressdetails.service';

@Component({
    selector: 'app-address-details',
    templateUrl: './address-details.component.html',
    styleUrls: ['./address-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddressDetailsComponent implements OnInit   {
    public addressForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private addressdetailsservice: AddressDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.addressForm = this.formBuilder.group({
            AddressId: [0],
            Mobile: [],
            Address1: [],
            Address2: [],
            Locality: [],
            City: [],
            State: [],
            PinCode: [] 
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let addressdetails = this.addressForm.value;
        this.http.post(this.isEditable ? APP_CONSTANT.ADDRESSDETAILS.EDIT : APP_CONSTANT.ADDRESSDETAILS.ADD, addressdetails, httpOptions)
            .subscribe((addressdetails) => {
                // login successful if there's a jwt token in the response
                if (addressdetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(addressdetails);
                }
                return addressdetails;

            });
    }
}


 
