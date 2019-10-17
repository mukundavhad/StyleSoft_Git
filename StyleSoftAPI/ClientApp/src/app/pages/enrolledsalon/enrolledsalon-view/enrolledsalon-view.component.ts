import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../../../dialog/dialog.service';
import { EnrolledSalonDetailsService } from './enrolledsalondetails.service';
import { EnrolledSalonDetailsComponent } from '../enrolledsalon-details/enrolledsalon-details.component';

@Component({
  selector: 'app-enrolledsalon-view',
    templateUrl: './enrolledsalon-view.component.html',
  encapsulation: ViewEncapsulation.None
})

export class EnrolledSalonViewComponent {
  public data = [];
  public settings = {
    selectMode: 'single',  //single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: false,
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
        //editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
        confirmEdit: true
      //saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
      //cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
    },
    delete: {
        deleteButtonContent: '<i  class="fa fa-pencil mr-3 text-primary"></i>',
      confirmDelete: true
    },
    noDataMessage: 'No data found',
    columns: {     
        EnrolledSalonId: {
        title: 'ID',
        editable: false,
        width: '60px',
        type: 'html',
        valuePrepareFunction: (value) => { return '<div class="text-center">' + value + '</div>'; }       
      },
        SalonOwnerMobile: {
            title: 'Owner Mobile',
        type: 'string',
        filter: true
      },
        SalonOwnerName: {
            title: 'Salon Owner Name',
        type: 'string'
      },
        SalonOwnerEmailId: {
            title: 'Email Id',
        type: 'string'
      },
        
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

    constructor(private http: HttpClient, private dialog: DialogService, private enrolledsalondetailsservice: EnrolledSalonDetailsService) { 
    //this.getData((data) => {
    //  this.data = data;
    //});

        this.enrolledsalondetailsservice.loadEnrolledSalonDetails()
          .subscribe((enrolledsaloon: any) => {
              this.data = enrolledsaloon;
          });
  }

    redirectToAddNew() {
        const ref = this.dialog.open(EnrolledSalonDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Enroll Saloon', width: '65%',height:'80%' }, isEditable: false });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        this.enrolledsalondetailsservice.loadEnrolledSalonDetails()
            .subscribe((enrolledsaloon: any) => {
                this.data = enrolledsaloon;
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
      const ref = this.dialog.open(EnrolledSalonDetailsComponent, { data: event.data, modalConfig: { title: 'Add/Edit Enroll Saloon', width: '65%', height: '80%' }, isEditable: true });
      ref.afterClosed.subscribe(result => {
          this.RefreshGrid();
      });
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
