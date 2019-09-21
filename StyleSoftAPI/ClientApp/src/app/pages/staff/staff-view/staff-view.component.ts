import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { StaffDetailsService } from './staffdetails.service';
import { DialogService } from '../../../dialog/dialog.service';
import { StaffDetailsComponent } from '../staff-details/staff-details.component';
import { PageSettingsModel } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-staff-view',
    templateUrl: './staff-view.component.html',
    styleUrls: ['./staff-view.component.scss']
})
export class StaffViewComponent implements OnInit {
    public rowData: Object[];
    public pageSettings: PageSettingsModel;
    constructor(private router: Router, private dialog: DialogService, private formBuilder: FormBuilder, private http: HttpClient, private staffdetailsservice: StaffDetailsService) { }

    ngOnInit() {

        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.staffdetailsservice.loadStaffDetails()
            .subscribe((staff: any) => {
                this.rowData = staff;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(StaffDetailsComponent, { modalConfig: { title: 'Add/Edit Staff Details' }, isEditable: false });
        ref.afterClosed.subscribe(result => {
            // this.rowData.push(result); //TODO this should be implemented like this
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.staffdetailsservice.loadStaffDetails()
            .subscribe((staff: any) => {
                this.rowData = staff;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
