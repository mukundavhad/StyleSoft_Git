import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { SaloonDetailsService } from '../../saloon/saloon-view/saloondetails.service';
import { EnrolledSalonDetailsService } from '../../enrolledsalon/enrolledsalon-view/enrolledsalondetails.service';
import { ServicesDetailsService } from '../../services/services-view/servicesdetails.service';
import { DropDownBase } from '@syncfusion/ej2-dropdowns';
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";

@Component({
  selector: 'app-appointment-details',
    templateUrl: './appointment-details.component.html',
    styleUrls: ['./appointment-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentDetailsComponent implements OnInit   {
    public appointmentForm: FormGroup;
    public textownername: string = "Find Shop Owner Name";
    public textshoplocation: string = "Find Shop Locality";
    public textservice: string = "Find Service";
    public autofill: Boolean = true;
    public filterType: string = 'StartsWith';
    public fieldownername: Object = { key: 'EnrolledSalonId', value: 'SalonOwnerName' };
    public fieldshoplocation: Object = { key: 'ShopLocationId', value: 'Locality' };
    public fieldservice: Object = { key: 'ServiceId', value: 'ServiceName' };
    public ownernameList: [];
    public shoplocationList: [];
    public servicenameList: [];
    public isEditable: boolean = false;

    @ViewChild('EnrolledSalonSample', { static: false })
    public EnrolledSampleObj: DropDownBase;

    @ViewChild('ShopLocationSample', { static: false })
    public LocationSampleObj: DropDownBase;

    @ViewChild('ServiceSample', { static: false })
    public ServiceSampleObj: DropDownBase;

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


        this.enrolledsalondetailsService.loadEnrolledSalonDetails()
            .subscribe((enrolledsalon: any) => {
                this.ownernameList = enrolledsalon;
            });

        this.saloondetailsService.loadSaloonDetails()
            .subscribe((location: any) => {
                this.shoplocationList = location;
            });

        this.servicesdetailsService.loadServicesDetails()
            .subscribe((service: any) => {
                this.servicenameList = service;
            });
    }

    onRenderCell(args) {
        /*Apply selected format to the component*/
        if (args.date.getDay() == 0 || args.date.getDay() == 6) {
            //sets isDisabled to true to disable the date.
            args.isDisabled = true;
        }
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let appointmentdetails = this.appointmentForm.value;

        appointmentdetails.EnrolledSalonId = this.EnrolledSampleObj.itemData["EnrolledSalonId"];
        delete appointmentdetails.OwnerName;
        appointmentdetails.ShopLocationId = this.LocationSampleObj.itemData["ShopLocationId"];
        delete appointmentdetails.ShopLocation;
        appointmentdetails.ServiceId = this.ServiceSampleObj.itemData["ServicesId"];
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


 
