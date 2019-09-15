import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaloonDetailsService } from '../saloon-view/saloondetails.service';
import { APP_CONSTANT } from '../../../../config';
import { Router } from '@angular/router';
import { SaloonDetailsComponent } from '../saloon-details/saloon-details.component';

@Component({
    selector: 'app-saloon-view',
    templateUrl: './saloon-view.component.html',
    styleUrls: ['./saloon-view.component.scss']
})
export class SaloonViewComponent implements OnInit {

    private gridApi;
    private gridColumnApi;

    columnDefs = [

        {
            headerName: 'Edit', valueFormatter: () => { return 'Edit' }, 'width': 40,

            cellRenderer: (params) => {
                var newTH = document.createElement('div');
                newTH.innerHTML = '<i class="pi pi-pencil" style="font-size: large;"></i>';
                newTH.onclick = () => {
                    //const ref = this.dialog.open(CustomerInfoComponent, { data: params.data, modalConfig: { title: 'Add/Edit Customer' }, isEditable: true });
                    //ref.afterClosed.subscribe(result => {
                    //    this.RefreshGrid();
                    //});
                };
                return newTH;
            },
        },

        {
            headerName: 'Delete', 'width': 40,

            cellRenderer: (params) => {
                var newTH = document.createElement('div');
                newTH.innerHTML = ' <i class="pi pi-trash" style="font-size: initial;"></i>';
                newTH.onclick = () => {
                    //this.delete(params.data);

                };
                return newTH;
            },
        },
        {
            headerName: 'Sr.No', headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            field: 'PkId', 'width': 100,
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },

        {
            headerName: 'Shop Name ', field: 'ShopName', 'width': 180,
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },
        {
            headerName: 'Address ', field: 'ShopAddress1', 'width': 180,
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },

        {
            headerName: 'Locality', field: 'Locality',
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },
        {
            headerName: 'City           ', field: 'City',
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },

        {
            headerName: 'State           ', field: 'State',
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },
        {
            headerName: 'Pincode           ', field: 'Pincode',
            filter: "agTextColumnFilter",
            filterParams: { defaultOption: "startsWith" }
        },
    ];

    defaultColDef = {
        sortable: true,
        filter: true
    };

    rowData;

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.ngOnInit();
    }

    constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private saloondetailsservice: SaloonDetailsService) { }

    ngOnInit() {

        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.saloondetailsservice.loadSaloonDetails()
            .subscribe((saloon: any) => {
                this.rowData = saloon;
            });
    }


    redirectToAddNew() {
        //const ref = this.dialog.open(SaloonDetailsComponent, { modalConfig: { title: 'Add/Edit Salon Details' }, isEditable: false });
        //ref.afterClosed.subscribe(result => {
        //    // this.rowData.push(result); //TODO this should be implemented like this
        //    this.RefreshGrid();
        //});
    }
}
