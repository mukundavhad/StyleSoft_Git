
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class ServiceCategoryDetailsService {
  constructor(private http: HttpClient) { }

  loadserviceCategoryDetails() {
      return this.http.get(APP_CONSTANT.SERVICECATEGORYDETAILS.GETALL);
     
  }

   searchCategoryName(searchString) {
    return this.http.post(APP_CONSTANT.SERVICECATEGORYDETAILS.SEARCH_SERVICECATEGORY, JSON.stringify(searchString));
  }

  //getCustomerByID(id) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.GETByID,id);
  //}

}


