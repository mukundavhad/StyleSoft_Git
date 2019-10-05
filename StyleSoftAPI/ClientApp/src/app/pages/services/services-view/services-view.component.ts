import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../../../dialog/dialog.service';
import { ServicesDetailsService } from './servicesdetails.service';
import { ServicesDetailsComponent } from '../services-details/services-details.component';

@Component({
    selector: 'app-services-view',
    templateUrl: './services-view.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ServicesViewComponent {
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
          ServicesId: {
              title: 'ID',
              editable: false,
              width: '60px',
              type: 'html',
              valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }
          },
          OwnerName: {
            title: ' Owner Name',
            type: 'string',
            filter: true
      },
        ShopName: {
            title: 'Shop Name',
        type: 'string'
      },
        CategoryName: {
            title: 'Category Name',
        type: 'string'
      },
        ServiceName: {
            title: 'ServiceName',
            type: 'string'
        },
        ServiceDescription: {
            title: 'Description',
            type: 'string'
        }, 
        ServiceCost: {
            title: 'Cost',
            type: 'string'
        }, 
        ServiceDuration: {
            title: 'Duration',
            type: 'string'
        }, 
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

    constructor(private http: HttpClient, private dialog: DialogService, private servicesdetailsservice: ServicesDetailsService) { 
    //this.getData((data) => {
    //  this.data = data;
    //});

        this.servicesdetailsservice.loadServicesDetails()
            .subscribe((services: any) => {
                this.data = services;
          });
  }

redirectToAddNew() {
        const ref = this.dialog.open(ServicesDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Services Details', width: '75%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        this.servicesdetailsservice.loadServicesDetails()
            .subscribe((services: any) => {
                this.data = services;
            });
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
  }

  public onRowHover(event){
    //console.log(event);
  }

}
