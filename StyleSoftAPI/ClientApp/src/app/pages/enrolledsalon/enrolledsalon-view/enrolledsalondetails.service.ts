
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class EnrolledSalonDetailsService {
  constructor(private http: HttpClient) { }

  loadenrolledsalonDetails() {
      return this.http.get(APP_CONSTANT.ENROLLEDSALONDETAILS.GETALL);
     
  }

    searchOwnerName(searchString) {
        return this.http.post(APP_CONSTANT.ENROLLEDSALONDETAILS.SEARCH_OWNERNAME, JSON.stringify(searchString));
    }
  

  //getCustomerByID(id) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.GETByID,id);
  //}

}


