import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONSTANT } from '../../../../config';
import { DialogRef } from '../../../dialog/dialog-ref';
import { ServicesDetailsService } from '../services-view/servicesdetails.service';

@Component({
  selector: 'app-services-details',
    templateUrl: './services-details.component.html',
    styleUrls: ['./services-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesDetailsComponent implements OnInit   {
    public servicesForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private dialog: DialogRef, private formBuilder: FormBuilder, private http: HttpClient, private servicesdetailsService: ServicesDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.servicesForm = this.formBuilder.group({
            ServicesId: [0],
            EnrolledSalonId: [],
            ShopLocationId: [],
            CategoryId: [],
            ServiceName: [],
            ServiceDescription: [],
            ServiceCost: [],
            ServiceDuration: [],
            Gender: [],
            CommissionPercentage: [],
            OwnerName: [{}],
            ShopLocation: [{}],
            CategoryName: [{}],
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let saloondetails = this.servicesForm.value;
         this.http.post(this.isEditable ? APP_CONSTANT.SALOONDETAILS.EDIT : APP_CONSTANT.SALOONDETAILS.ADD, saloondetails, httpOptions)
            .subscribe((saloondetails) => {
                // login successful if there's a jwt token in the response
                if (saloondetails) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.dialog.close(saloondetails);
                }
                //return product1;
            });
    }
}


 
