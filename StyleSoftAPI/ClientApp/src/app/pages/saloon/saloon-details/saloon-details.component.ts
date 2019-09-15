import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SaloonDetailsService } from '../saloon-view/saloondetails.service';
import { APP_CONSTANT } from '../../../../config';

@Component({
  selector: 'app-saloon-details',
    templateUrl: './saloon-details.component.html',
    styleUrls: ['./saloon-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaloonDetailsComponent implements OnInit   {
    public saloonForm: FormGroup;
    public isEditable: boolean = false;

    constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private saloondetailsservice: SaloonDetailsService) {
      //this.router = router;
  }

    ngOnInit() {

        this.saloonForm = this.formBuilder.group({
            PkId: [0],
            ShopName: [],
            ShopAddress1: [],
            Locality: [],
            City: [],
            State: [],
            PinCode: [],
            Cgst: [0],
            Sgst: [0],
        });
    }

    public onSubmit(values: Object): void {
        let httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        let saloondetails = this.saloonForm.value;
         this.http.post(this.isEditable ? APP_CONSTANT.SALOONDETAILS.EDIT : APP_CONSTANT.SALOONDETAILS.ADD, saloondetails, httpOptions)
            .subscribe((saloondetails) => {
                // login successful if there's a jwt token in the response
                //if (product1) {
                //    // store user details and jwt token in local storage to keep user logged in between page refreshes
                //    this.dialog.close(product1);
                //}
                //return product1;
            });
    }
}


 
