
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class AddressDetailsService {
  constructor(private http: HttpClient) { }

  loadAddressDetails() {
      return this.http.get(APP_CONSTANT.ADDRESSDETAILS.GETALL);
     
  }
    searchAddress(searchString) {
        return this.http.post(APP_CONSTANT.ADDRESSDETAILS.SEARCH_ADDRESSDETAILS, JSON.stringify(searchString));
    }

  //getCustomerByID(id) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.GETByID,id);
  //}

}


