import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';
import { ServiceCategoryDetailsService } from './servicecategorydetails.service';
import { ServiceCategoryDetailsComponent } from '../servicecategory-details/servicecategory-details.component';

@Component({
    selector: 'app-servicecategory-view',
    templateUrl: './servicecategory-view.component.html',
    styleUrls: ['./servicecategory-view.component.scss']
})
export class ServiceCategoryViewComponent implements OnInit {
    public rowData: Object[];
    public pageSettings: PageSettingsModel;

    constructor(private router: Router, private dialog: DialogService, private formBuilder: FormBuilder, private http: HttpClient, private servicecategorydetailsservice:ServiceCategoryDetailsService) { }

    ngOnInit() {

        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.servicecategorydetailsservice.loadserviceCategoryDetails()
            .subscribe((serviceCategory: any) => {
                this.rowData = serviceCategory;
            });
        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(ServiceCategoryDetailsComponent, { modalConfig: { title: 'Add/Edit Service Category Details' }, isEditable: false });
        ref.afterClosed.subscribe(result => {
             this.rowData.push(result); //TODO this should be implemented like this
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        
        this.servicecategorydetailsservice.loadserviceCategoryDetails()
            .subscribe((enrolledsalon: any) => {
                this.rowData = enrolledsalon;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
