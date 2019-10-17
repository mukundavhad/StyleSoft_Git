import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaloonDetailsService } from '../saloon-view/saloondetails.service';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { DialogConfig } from '../../../dialog/dialog-config';

@Component({
  selector: 'app-saloon-details',
    templateUrl: './saloon-details.component.html',
    styleUrls: ['./saloon-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaloonDetailsComponent implements OnInit   {
    public saloonForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private config: DialogConfig, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private saloondetailsservice: SaloonDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        //if (this.config.isEditable == false) {
        //    this.saloondetailsservice.getSalonNo()
        //        .subscribe((salonno: any) => {
        //            this.saloonForm.controls['ShopLocationId'].patchValue(salonno);
        //        });
        //}

        this.saloonForm = this.formBuilder.group({
            ShopLocationId: [0],
            ShopName: [],
            ShopAddress1: [],
            ShopAddress2: [],
            //EnrolledSalonId:[0],
            EnrolmentDate: [],
            Locality: [],
            City: [],
            State: [],
            PinCode: [],
            Cgst: [0],
            Sgst: [0],
            //Appointment: [],
            Offers: [],
            Services: [],
            StaffDetails: [],
            Token: []
        });
        if (this.config.isEditable == true) {
            this.setDataForEdit();
        }
    }

    setDataForEdit = () => {
        this.isEditable = true;
        let saloonForm = this.config.data;
        this.saloonForm.setValue(this.config.data);
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let saloondetails = this.saloonForm.value;
         this.http.post(this.isEditable ? APP_CONSTANT.SALOONDETAILS.EDIT : APP_CONSTANT.SALOONDETAILS.ADD, saloondetails, httpOptions)
            .subscribe((saloondetails) => {
                // login successful if there's a jwt token in the response
                if (saloondetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(saloondetails);
                }
                //return product1;
            });
    }
}


 
