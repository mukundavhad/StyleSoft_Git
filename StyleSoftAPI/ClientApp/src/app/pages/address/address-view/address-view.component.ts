import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';
import { AddressDetailsService } from './addressdetails.service';
import { AddressDetailsComponent } from '../address-details/address-details.component';

@Component({
    selector: 'app-address-view',
    templateUrl: './address-view.component.html',
    styleUrls: ['./address-view.component.scss']
})
export class AddressViewComponent implements OnInit {

    public rowData: Object[];
    public pageSettings: PageSettingsModel;


    constructor(private router: Router, private formBuilder: FormBuilder,
        private dialog: DialogService, private http: HttpClient, private addressdetailsservice: AddressDetailsService) { }

    ngOnInit() {

        this.addressdetailsservice.loadAddressDetails()
            .subscribe((address: any) => {
                this.rowData = address;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(AddressDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Address Details', width: '65%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.addressdetailsservice.loadAddressDetails()
            .subscribe((address: any) => {
                this.rowData = address;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
