import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { StaffDetailsService } from '../staff-view/staffdetails.service';
import { DialogRef } from '../../../dialog/dialog-ref';

@Component({
  selector: 'app-staff-details',
    templateUrl: './staff-details.component.html',
    styleUrls: ['./staff-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StaffDetailsComponent implements OnInit   {
    public staffForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef,private formBuilder: FormBuilder, private http: HttpClient, private staffdetailsservice: StaffDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.staffForm = this.formBuilder.group({
            StaffId: [0],
            EnrolledSalonId: [1],
            AddressId:[1],
            SalonOwnerMobile: [],
            ShopLocationId: [1],
            StaffMobileNumber: [],
            StaffName: [],
            CurrentlyWorkingInd: [],
            CommissionPercentage: [0]
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let staffdetails = this.staffForm.value;
         this.http.post(this.isEditable ? APP_CONSTANT.STAFFDETAILS.EDIT : APP_CONSTANT.STAFFDETAILS.ADD, staffdetails, httpOptions)
             .subscribe((staffdetails) => {
                // login successful if there's a jwt token in the response
                 if (staffdetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                     this.dialog.close(staffdetails);
                }
                 return staffdetails;
            });
    }
}


 
