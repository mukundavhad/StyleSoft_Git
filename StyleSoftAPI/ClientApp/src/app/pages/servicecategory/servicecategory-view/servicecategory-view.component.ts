import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../../../dialog/dialog.service';
import { ServiceCategoryDetailsService } from './servicecategorydetails.service';
import { ServiceCategoryDetailsComponent } from '../servicecategory-details/servicecategory-details.component';

@Component({
    selector: 'app-servicecategory-view',
    templateUrl: './servicecategory-view.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ServiceCategoryViewComponent {
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
        CategoryId: {
        title: 'ID',
        editable: false,
        width: '60px',
        type: 'html',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }       
      },
        CategoryName: {
            title: 'Category Name',
        type: 'string',
        filter: true
      }, 
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

    constructor(private http: HttpClient, private dialog: DialogService, private servicecategorydetailsservice: ServiceCategoryDetailsService) { 
    //this.getData((data) => {
    //  this.data = data;
    //});

        this.servicecategorydetailsservice.loadCategoryDetails()
          .subscribe((category: any) => {
              this.data = category;
          });
  }

redirectToAddNew() {
    const ref = this.dialog.open(ServiceCategoryDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Service Category', width: '55%',height:'70%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        this.servicecategorydetailsservice.loadCategoryDetails()
            .subscribe((category: any) => {
                this.data = category;
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
  }

  public onRowHover(event){
    //console.log(event);
  }

}
