import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { ServicesDetailsService } from '../services-view/servicesdetails.service';
import { SaloonDetailsService } from '../../saloon/saloon-view/saloondetails.service';
import { EnrolledSalonDetailsService } from '../../enrolledsalon/enrolledsalon-view/enrolledsalondetails.service';
import { AutoCompleteComponent, DropDownBase } from '@syncfusion/ej2-angular-dropdowns';
import { DialogConfig } from '../../../dialog/dialog-config';

@Component({
    selector: 'app-services-details',
    templateUrl: './services-details.component.html',
    styleUrls: ['./services-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ServicesDetailsComponent implements OnInit {
    public servicesForm: FormGroup;
    public textownername: string = "Find Shop Owner Name";
    public textshoplocation: string = "Find Shop Location";
    public textcategoryname: string = "Find Service Catogory";
    public autofill: Boolean = true;
    public filterType: string = 'StartsWith';
    public fieldownername: Object = { key: 'EnrolledSalonId', value: 'SalonOwnerName' };
    public fieldshoplocation: Object = { key: 'ShopLocationId', value: 'ShopName' };
    public fieldcategoryname: Object = { key: 'CategoryId', value: 'CategoryName' };
    public categorynameList: [];
    public ownernameList: [];
    public shoplocationList: [];
    public isEditable: boolean = false;

    @ViewChild('EnrolledSalonSample', { static: false })
    public EnrolledSampleObj: DropDownBase;

    @ViewChild('ShopLocationSample', { static: false })
    public LocationSampleObj: DropDownBase;

    @ViewChild('CategorySample', { static: false })
    public CategorySampleObj: DropDownBase;

    constructor(private router: Router, private config: DialogConfig, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private servicesdetailsService: ServicesDetailsService, private saloondetailsService: SaloonDetailsService,
         private enrolledsalondetailsService: EnrolledSalonDetailsService) {
        //this.router = router;
    }

    ngOnInit() {
        //if (this.config.isEditable == false) {
        //    this.servicesdetailsService.getServiceNo()
        //        .subscribe((serviceno: any) => {
        //            this.servicesForm.controls['ServicesId'].patchValue(serviceno);
        //        });
        //}

        this.servicesForm = this.formBuilder.group({
            ServicesId: [0],
            EnrolledSalonId: [],
            ShopLocationId: [],
            CategoryId: [],
            ServiceName: [],
            ServiceDescription: [],
            ServiceCost: [],
            ServiceDuration: [],
            Gender: [],
            CommissionPercentage: [],
            OwnerName: [{}],
            ShopName: [{}],
            CategoryName: [{}],
        });

        this.enrolledsalondetailsService.loadEnrolledSalonDetails()
            .subscribe((enrolledsalon: any) => {
                this.ownernameList = enrolledsalon;
            });

        this.saloondetailsService.loadSaloonDetails()
            .subscribe((location: any) => {
                this.shoplocationList = location;
            });

        //this.servicecategorydetailsService.loadCategoryDetails()
        //    .subscribe((servicecategory: any) => {
        //        this.categorynameList = servicecategory;
        //    });

        if (this.config.isEditable == true) {
            this.setDataForEdit();
        }

    }

    setDataForEdit = () => {
        this.isEditable = true;
        let servicesForm = this.config.data;
        //appointmentForm.RecordDate = moment(this.config.data.RecordDate).toDate();
        this.servicesForm.setValue(this.config.data);
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let servicesdetails = this.servicesForm.value;

        servicesdetails.EnrolledSalonId = this.EnrolledSampleObj.itemData["EnrolledSalonId"];
        delete servicesdetails.OwnerName;
        servicesdetails.ShopLocationId = this.LocationSampleObj.itemData["ShopLocationId"];
        delete servicesdetails.ShopLocation;
        servicesdetails.CategoryId = this.CategorySampleObj.itemData["CategoryId"]; 
        delete servicesdetails.CategoryName;

        this.http.post(this.isEditable ? APP_CONSTANT.SERVICESDETAILS.EDIT : APP_CONSTANT.SERVICESDETAILS.ADD, servicesdetails, httpOptions)
            .subscribe((servicesdetails) => {
                // login successful if there's a jwt token in the response
                if (servicesdetails) {
                    //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(servicesdetails);
                }
                return servicesdetails;
            });
    }
}



