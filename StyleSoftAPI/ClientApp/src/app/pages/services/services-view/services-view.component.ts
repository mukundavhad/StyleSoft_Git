import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';


import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';
import { ServicesDetailsService } from './servicesdetails.service';
import { ServicesDetailsComponent } from '../services-details/services-details.component';

@Component({
    selector: 'app-services-view',
    templateUrl: './services-view.component.html',
    styleUrls: ['./services-view.component.scss']
})
export class ServicesViewComponent implements OnInit {

    public rowData: Object[];
    public pageSettings: PageSettingsModel;


    constructor(private router: Router, private formBuilder: FormBuilder,
        private dialog:DialogService, private http: HttpClient, private servicesdetailsservice: ServicesDetailsService) { }

    ngOnInit() {

        this.servicesdetailsservice.loadSaloonDetails()
            .subscribe((saloon: any) => {
                this.rowData = saloon;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(ServicesDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Services Details', width: '65%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.servicesdetailsservice.loadSaloonDetails()
            .subscribe((saloon: any) => {
                this.rowData = saloon;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
