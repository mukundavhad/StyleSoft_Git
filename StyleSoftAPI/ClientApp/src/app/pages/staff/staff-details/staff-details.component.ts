import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { StaffDetailsService } from '../staff-view/staffdetails.service';
import { DialogRef } from '../../../dialog/dialog-ref';
import { AddressDetailsService } from '../../address/address-view/addressdetails.service';
import { SaloonDetailsService } from '../../saloon/saloon-view/saloondetails.service';
import { DropDownBase} from '@syncfusion/ej2-angular-dropdowns';
import { DialogConfig } from '../../../dialog/dialog-config';

@Component({
  selector: 'app-staff-details',
    templateUrl: './staff-details.component.html',
    styleUrls: ['./staff-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StaffDetailsComponent implements OnInit   {
    public textlocation: string = "Find Shop Name";
    public textaddress: string = "Find Address";
    public fieldaddress: Object = { key: 'AddressId', text: 'Address1' };
    public fieldlocation: Object = { key: 'ShopLocationId', text: 'ShopName' };

    public addressList: [];
    public shoplocationList: []; 
    
    public staffForm: FormGroup;
    public isEditable: boolean = false;
    public autofill: Boolean = true;
    public filterType: string = 'StartsWith';

    @ViewChild('Addresssample', { static: false })
    public AddressSampleObj: DropDownBase; 

    @ViewChild('Locationsample', { static: false })
    public LocationSampleObj: DropDownBase; 

    constructor(private router: Router, private config: DialogConfig, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private saloondetailsService: SaloonDetailsService,private addressdetailsservice: AddressDetailsService,private staffdetailsservice: StaffDetailsService) {
      //this.router = router;
  }

    ngOnInit() {
        //if (this.config.isEditable == false) {
        //    this.staffdetailsservice.getStaffNo()
        //        .subscribe((staffno: any) => {
        //            this.staffForm.controls['StaffId'].patchValue(staffno);
        //        });
        //}

        this.staffForm = this.formBuilder.group({
            StaffId: [0],
            //EnrolledSalonId: [1],
            Address1: [{}],
            ShopName: [{}],
            AddressId: [],
            SalonOwnerMobile: [],
            ShopLocationId: [],
            StaffMobileNumber: [],
            StaffName: [],
            CurrentlyWorkingInd: [],
            CommissionPercentage: [0],
        });


        this.addressdetailsservice.loadAddressDetails()
            .subscribe((address: any) => {
                this.addressList = address;
            });

        this.saloondetailsService.loadSaloonDetails()
            .subscribe((location: any) => {
                this.shoplocationList = location;
            });


        if (this.config.isEditable == true) {
            this.setDataForEdit();
        }
        
    }

    setDataForEdit = () => {
        this.isEditable = true;
        let staffForm = this.config.data;
        //appointmentForm.RecordDate = moment(this.config.data.RecordDate).toDate();
        this.staffForm.setValue(this.config.data);
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let staffdetails = this.staffForm.value;

        staffdetails.AddressId = this.AddressSampleObj.itemData["AddressId"];
        staffdetails.ShopLocationId = this.LocationSampleObj.itemData["ShopLocationId"];

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


 
