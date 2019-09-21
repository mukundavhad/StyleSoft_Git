import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { EnrolledSalonDetailsService } from './enrolledsalondetails.service';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';
import { EnrolledSalonDetailsComponent } from '../enrolledsalon-details/enrolledsalon-details.component';

@Component({
    selector: 'app-enrolledsalon-view',
    templateUrl: './enrolledsalon-view.component.html',
    styleUrls: ['./enrolledsalon-view.component.scss']
})
export class EnrolledSalonViewComponent implements OnInit {
    public rowData: Object[];
    public pageSettings: PageSettingsModel;

    constructor(private router: Router, private dialog: DialogService,private formBuilder: FormBuilder, private http: HttpClient, private enrolledsalondetailsservice:EnrolledSalonDetailsService) { }

    ngOnInit() {

        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.enrolledsalondetailsservice.loadenrolledsalonDetails()
            .subscribe((enrolledsalon: any) => {
                this.rowData = enrolledsalon;
            });
        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(EnrolledSalonDetailsComponent, { modalConfig: { title: 'Add/Edit Enrolled Salon Details' }, isEditable: false });
        ref.afterClosed.subscribe(result => {
             this.rowData.push(result); //TODO this should be implemented like this
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        
        this.enrolledsalondetailsservice.loadenrolledsalonDetails()
            .subscribe((enrolledsalon: any) => {
                this.rowData = enrolledsalon;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
