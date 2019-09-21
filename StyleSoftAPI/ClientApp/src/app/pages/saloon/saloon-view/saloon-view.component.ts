import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaloonDetailsService } from '../saloon-view/saloondetails.service';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { SaloonDetailsComponent } from '../saloon-details/saloon-details.component';


import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DialogService } from '../../../dialog/dialog.service';

@Component({
    selector: 'app-saloon-view',
    templateUrl: './saloon-view.component.html',
    styleUrls: ['./saloon-view.component.scss']
})
export class SaloonViewComponent implements OnInit {

    public rowData: Object[];
    public pageSettings: PageSettingsModel;


    constructor(private router: Router, private formBuilder: FormBuilder,
        private dialog:DialogService, private http: HttpClient, private saloondetailsservice: SaloonDetailsService) { }

    ngOnInit() {

        this.saloondetailsservice.loadSaloonDetails()
            .subscribe((saloon: any) => {
                this.rowData = saloon;
            });

        this.pageSettings = { pageSize: 6 };
    }


    redirectToAddNew() {
        const ref = this.dialog.open(SaloonDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Saloon Details', width: '65%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {

        this.saloondetailsservice.loadSaloonDetails()
            .subscribe((saloon: any) => {
                this.rowData = saloon;
            });
        this.pageSettings = { pageSize: 6 };
    }
}
