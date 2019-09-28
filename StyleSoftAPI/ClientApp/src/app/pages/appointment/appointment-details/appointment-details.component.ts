import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { SaloonDetailsService } from '../../saloon/saloon-view/saloondetails.service';
import { ServiceCategoryDetailsService } from '../../servicecategory/servicecategory-view/servicecategorydetails.service';
import { EnrolledSalonDetailsService } from '../../enrolledsalon/enrolledsalon-view/enrolledsalondetails.service';
import { ServicesDetailsService } from '../../services/services-view/servicesdetails.service';

@Component({
  selector: 'app-appointment-details',
    templateUrl: './appointment-details.component.html',
    styleUrls: ['./appointment-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentDetailsComponent implements OnInit   {
    public appointmentForm: FormGroup;
    public servicenameList: [];
    public ownernameList: [];
    public shoplocationList: []; 
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private servicesdetailsService: ServicesDetailsService, private saloondetailsService: SaloonDetailsService,
         private enrolledsalondetailsService: EnrolledSalonDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.appointmentForm = this.formBuilder.group({
            AppointmentId: [0],
            EnrolledSalonId: [],
            ShopLocationId: [],
            ServiceId: [],
            CustomerMobile: [],
            RelationType: [],
            AppointmentDate: [],
            AppointmentTime: [],
            OwnerName: [{}],
            ShopLocation: [{}],
            ServiceName: [{}],
        });
    }

    searchShopLocation(event) {
        this.saloondetailsService.searchShopLocation(event.query).subscribe((data: any) => {
            this.shoplocationList = data;
        });
    }

    searchOwnerName(event) {
        this.enrolledsalondetailsService.searchOwnerName(event.query).subscribe((data: any) => {
            this.ownernameList = data;
        });
    }

    searchServiceName(event) {
        this.servicesdetailsService.searchServiceName(event.query).subscribe((data: any) => {
            this.servicenameList = data;
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let appointmentdetails = this.appointmentForm.value;

        appointmentdetails.EnrolledSalonId = appointmentdetails.OwnerName.EnrolledSalonId;
        delete appointmentdetails.OwnerName;
        appointmentdetails.ShopLocationId = appointmentdetails.ShopLocation.ShopLocationId;
        delete appointmentdetails.ShopLocation;
        appointmentdetails.ServiceId = appointmentdetails.ServiceName.ServiceId;
        delete appointmentdetails.ServiceName;

         this.http.post(this.isEditable ? APP_CONSTANT.APPONTMENTDETAILS.EDIT : APP_CONSTANT.APPONTMENTDETAILS.ADD, appointmentdetails, httpOptions)
            .subscribe((appointmentdetails) => {
                // login successful if there's a jwt token in the response
                if (appointmentdetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(appointmentdetails);
                }
                return appointmentdetails;
            });
    }
}


 
