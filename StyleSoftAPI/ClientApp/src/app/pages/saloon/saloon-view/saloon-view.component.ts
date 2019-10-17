import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../../../dialog/dialog.service';
import { SaloonDetailsService } from './saloondetails.service';
import { SaloonDetailsComponent } from '../saloon-details/saloon-details.component';

@Component({
  selector: 'app-saloon-view',
    templateUrl: './saloon-view.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SaloonViewComponent {
  public data = [];
  public settings = {
    selectMode: 'single',  //single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: true,
      custom: [],
      position: 'right' // left|right
    },
    add: {     
      addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
      createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
      saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
      confirmDelete: true
    },
    noDataMessage: 'No data found',
    columns: {     
        ShopLocationId: {
        title: 'ID',
        editable: false,
        width: '60px',
        type: 'html',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }       
      },
        ShopName: {
            title: 'Shop Name',
        type: 'string',
        filter: true
      },
        ShopAddress1: {
            title: 'Shop Address1',
        type: 'string'
      },
        ShopAddress2: {
            title: 'Shop Address2',
        type: 'string'
      },
        Locality: {
            title: 'Locality',
            type: 'string'
        },
         Cgst: {
             title: 'Cgst',
            type: 'number'
        },
          Sgst: {
              title: 'Sgst',
            type: 'number'
        }
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

    constructor(private http: HttpClient, private dialog: DialogService, private saloondetailsservice: SaloonDetailsService) { 
    //this.getData((data) => {
    //  this.data = data;
    //});

        this.saloondetailsservice.loadSaloonDetails()
          .subscribe((saloon: any) => {
              this.data = saloon;
          });
  }

redirectToAddNew() {
        const ref = this.dialog.open(SaloonDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Saloon Details', width: '65%',height:'80%' }, isEditable: false });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        this.saloondetailsservice.loadSaloonDetails()
            .subscribe((address: any) => {
                this.data = address;
            });
        //this.pageSettings = { pageSize: 6 };
    }

  //public getData(data) {
  //  const req = new XMLHttpRequest();
  //  req.open('GET', 'assets/data/users.json');
  //  req.onload = () => {
  //    data(JSON.parse(req.response));
  //  };
  //  req.send();
  //}

  public onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  public onRowSelect(event){
   // console.log(event);
  }

  public onUserRowSelect(event){
    //console.log(event);   //this select return only one page rows
      const ref = this.dialog.open(SaloonDetailsComponent, { data: event.data, modalConfig: { title: 'Add/Edit Saloon Details', width: '65%', height: '80%' }, isEditable: true });
      ref.afterClosed.subscribe(result => {
          this.RefreshGrid();
      });
  }

  public onRowHover(event){
    //console.log(event);
  }

}
