import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DialogService } from '../../../dialog/dialog.service';
import { StaffDetailsService } from './staffdetails.service';
import { StaffDetailsComponent } from '../staff-details/staff-details.component';

@Component({
    selector: 'app-staff-view',
    templateUrl: './staff-view.component.html',
  encapsulation: ViewEncapsulation.None
})

export class StaffViewComponent {
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
        StaffId: {
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
        ShopName: {
            title: 'Shop Name',
        type: 'string',
        filter: true
        },
        Address1: {
            title: 'Address',
            type: 'string',
            filter: true
        },
        StaffName: {
            title: 'Staff Name',
        type: 'string'
        },
        StaffMobileNumber: {
            title: 'Staff Mobile',
            type: 'string'
        },
        CurrentlyWorkingInd: {
            title: 'Currently Working',
        type: 'string'
      },
        CommissionPercentage: {
            title: 'Commission(%)',
            type: 'string'
        },
          
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

    constructor(private http: HttpClient, private dialog: DialogService, private staffdetailsservice: StaffDetailsService) { 
    //this.getData((data) => {
    //  this.data = data;
    //});

        this.staffdetailsservice.loadStaffDetails()
          .subscribe((staff: any) => {
              this.data = staff;
          });
  }

redirectToAddNew() {
        const ref = this.dialog.open(StaffDetailsComponent, { data: {}, modalConfig: { title: 'Add/Edit Staff Details', width: '75%',height:'80%' }, isEditable: true });
        ref.afterClosed.subscribe(result => {
            this.RefreshGrid();
        });
    }

    RefreshGrid = () => {
        this.staffdetailsservice.loadStaffDetails()
            .subscribe((staff: any) => {
                this.data = staff;
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
      const ref = this.dialog.open(StaffDetailsComponent, { data: event.data, modalConfig: { title: 'Add/Edit Staff Details', width: '75%', height: '80%' }, isEditable: true });
      ref.afterClosed.subscribe(result => {
          this.RefreshGrid();
      });
  }

  public onRowHover(event){
    //console.log(event);
  }

}
