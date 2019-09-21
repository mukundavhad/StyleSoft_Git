import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { CustomerDetailsService } from './customerdetails.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { DialogService } from '../../../dialog/dialog.service';

@Component({
    selector: 'app-customer-view',
    templateUrl: './customer-view.component.html',
    styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
    public rowData: Object[];
    public pageSettings: PageSettingsModel;

    constructor(private router: Router, private dialog: DialogService,private formBuilder: FormBuilder, private http: HttpClient, private customerdetailsservice: CustomerDetailsService) { }

    ngOnInit() {

        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.customerdetailsservice.loadCustomerDetails()
            .subscribe((customer: any) => {
                this.rowData = customer;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(CustomerDetailsComponent, { modalConfig: { title: 'Add/Edit Customer Details' ,width: '65%', height: '80%'}, isEditable: false });
        ref.afterClosed.subscribe(result => {
            //this.rowData.push(result); //TODO this should be implemented like this
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.customerdetailsservice.loadCustomerDetails()
            .subscribe((customer: any) => {
                this.rowData = customer;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
