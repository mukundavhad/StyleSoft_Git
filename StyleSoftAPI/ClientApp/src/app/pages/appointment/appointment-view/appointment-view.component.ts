import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';


import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';
import { AppointmentDetailsComponent } from '../appointment-details/appointment-details.component';
import { AppointmentDetailsService } from './appointment.service';

@Component({
    selector: 'app-appointment-view',
    templateUrl: './appointment-view.component.html',
    styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent implements OnInit {

    public rowData: Object[];
    public pageSettings: PageSettingsModel;


    constructor(private router: Router, private formBuilder: FormBuilder,
        private dialog: DialogService, private http: HttpClient, private appointmentdetailsservice: AppointmentDetailsService) { }

    ngOnInit() {

        this.appointmentdetailsservice.loadAppointmentDetails()
            .subscribe((services: any) => {
                this.rowData = services;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(AppointmentDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Appointment Details', width: '80%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.appointmentdetailsservice.loadAppointmentDetails()
            .subscribe((services: any) => {
                this.rowData = services;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
