import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DialogRef } from '../../../dialog/dialog-ref';
import { DialogConfig } from '../../../dialog/dialog-config';
import { DropDownBase } from '@syncfusion/ej2-dropdowns';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppointmentDetailsService } from '../appointment-view/appointmentdetails.service';
import { ServicesDetailsService } from '../../services/services-view/servicesdetails.service';
import { SaloonDetailsService } from '../../saloon/saloon-view/saloondetails.service';
import { EnrolledSalonDetailsService } from '../../enrolledsalon/enrolledsalon-view/enrolledsalondetails.service';
import { StaffDetailsService } from '../../staff/staff-view/staffdetails.service';

@Component({
    selector: 'app-appointment-details',
    templateUrl: './appointment-details.component.html',
    styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
    AppointmentDetailsList: any = [];
    AppointmentMaster: AppointmentMaster;
    public textownername: string = "Find Shop Owner Name";
    public textshoplocation: string = "Find Shop Locality";
    public textservicename: string = "Find Service";
    public textstaffname: string = "Find Staff Name"

    public autofill: Boolean = true;
    public filterType: string = 'StartsWith';
    public fieldownername: Object = { key: 'EnrolledSalonId', value: 'SalonOwnerName' };
    public fieldshoplocation: Object = { key: 'ShopLocationId', value: 'Locality' };
    public fieldservicename: Object = { key: 'ServiceId', value: 'ServiceName' };
    public fieldstaffname: Object = { key: 'StaffId', value: 'StaffName' };
    public ownernameList: [];
    public shoplocationList: [];
    public servicenameList: [];
    public staffnameList: [];
    isEditable: boolean = false;

    @ViewChild('EnrolledSalonSample', { static: false })
    public EnrolledSampleObj: DropDownBase;

    @ViewChild('ShopLocationSample', { static: false })
    public LocationSampleObj: DropDownBase;

    @ViewChild('ServiceSample', { static: false })
    public ServiceSampleObj: DropDownBase;

    @ViewChild('StaffSample', { static: false })
    public StaffSampleObj: DropDownBase;

    constructor(private router: Router, private config: DialogConfig, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private appointmentdetailsService: AppointmentDetailsService, private servicesdetailsService: ServicesDetailsService, private saloondetailsService: SaloonDetailsService,
        private enrolledsalondetailsService: EnrolledSalonDetailsService, private staffdetailsService: StaffDetailsService) { }

  ngOnInit() {

    let detail = new AppointmentDetail();
      this.AppointmentDetailsList = [detail];
      this.AppointmentMaster = new AppointmentMaster();

      this.AppointmentMaster.GrandTotal = 0;

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

      this.staffdetailsService.loadStaffDetails()
          .subscribe((staff: any) => {
              this.staffnameList = staff;
          });

    if (this.config.isEditable == true) {
      this.setDataForEdit();
    }
    //else {
    //  this.loadProductTypes();
    //}
  }

  //calculateGrandTotal = () => {

  //  this.AppointmentDetailsList.forEach((key, value) => {
  //      this.AppointmentMaster.GrandTotal += parseFloat(key.Total);
  //  })
  //}

  calculateTaxableAmount(event, item) {
      item.Total = parseFloat(item.Quantity) * parseFloat(item.Price) - parseFloat(item.Discount);
     
     // this.calculateGrandTotal();

      //this.AppointmentDetailsList.forEach((key, value) => {
      this.AppointmentMaster.GrandTotal += parseFloat(item.Total);

      //item.ServiceId = this.ServiceSampleObj.itemData["ServicesId"];
      //item.StaffId = this.StaffSampleObj.itemData["StaffId"];
      //})
  }

  setDataForEdit = () => {
    this.isEditable = true;
      this.AppointmentMaster = this.config.data;
      this.AppointmentMaster.deletedDetailsList = [];
      //this.AppointmentMaster.AppointmentDate = moment(this.config.data.AppointmentDate).toDate();
    this.getAllAppointmentmastedetails();
  }

    getAllAppointmentmastedetails() {
    //this.appointmentdetailsService.getAllPurchasebillmastedetails(this.config.data).subscribe((response) => {
    //  this.AppointmentDetailsList = response;

        //this.servicesdetailsService.loadServicesDetails()
        //    .subscribe((service: any) => {
        //        this.servicenameList = service;
        //    });

        //this.staffdetailsService.loadStaffDetails()
        //    .subscribe((staff: any) => {
        //        this.staffnamelist = staff;
        //    });
    //});
  }

  addNewItem = () => {
    let newDetails = new AppointmentDetail();
      newDetails.AppointmentId = this.AppointmentMaster.AppointmentId;
    this.AppointmentDetailsList.push(newDetails);
    //this.calculateGrandTotal();
  }

  removeItem = (item) => {
    this.AppointmentMaster.deletedDetailsList.push(this.AppointmentDetailsList.find(p => p.PkId == item.PkId));
    this.AppointmentDetailsList = this.AppointmentDetailsList.filter(p => p.PkId != item.PkId);
    //this.calculateGrandTotal();
    }

    onSelectServicename = (value, model: any) => {
        model.ServiceId = value.itemData["ServicesId"];
        this.AppointmentDetailsList.ServiceId = model.ServiceId;
    };

    onSelectStaffname = (value, model: any) => {
        model.StaffId = value.itemData["StaffId"];
        this.AppointmentDetailsList.StaffId = model.StaffId;
    };

  saveItems = (isPrint) => {

    let appointmentDetails = {};
      this.AppointmentMaster.AppointmentDt = this.AppointmentDetailsList;
      this.AppointmentMaster.EnrolledSalonId = this.EnrolledSampleObj.itemData["EnrolledSalonId"];
      this.AppointmentMaster.ShopLocationId = this.LocationSampleObj.itemData["ShopLocationId"];
      

    appointmentDetails = JSON.parse(JSON.stringify(this.AppointmentMaster));

    this.AppointmentMaster.AppointmentDt.forEach((key: any, value: any) => {
        key.PkId = 0;
         
    })

    //adding deleted records List
    this.appointmentdetailsService.saveAppointment(this.AppointmentMaster).subscribe((response) => {
      this.dialog.close("Appointment added successfully");
      //if (isPrint && isPrint == true) {
      //  this.printService.printDocument("PurchaseBill","");
      //}
    });
   
    // store user details and jwt token in local storage to keep user logged in between page refreshes
   
  }
  
}

export class AppointmentDetail {
    PkId: number = 0;
    AppointmentId: number = 0;
    ServiceId: number = 0;
    StaffId: number = 0;
    Time: string = '';
    Price: number=0;
    Discount: number = 0;
    Total: number = 0;

    ServiceName: any;
    StaffName: any;
    servicenameList = [];
    staffnameList = [];
 
}

export class AppointmentMaster {
    AppointmentId: number = 0;
    CustomerMobile: string = '';
    RelationType: string = '';
    Remarks: string = '';
    Status: string = '';
    CancelRemarks: string = '';
    AppointmentDate: Date = new Date();
    EnrolledSalonId: number = 0;
    ShopLocationId: number = 0;
    GrandTotal: number = 0;
    //following fields re used for selecting object in typo, User clicked on type field then below field will have customer object selected
    OwnerName: any;
    ShopName: any;
    AppointmentDt: AppointmentDetail[];
    deletedDetailsList: any[] = [];
}
