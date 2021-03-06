
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class SaloonDetailsService {
  constructor(private http: HttpClient) { }

  loadSaloonDetails() {
      return this.http.get(APP_CONSTANT.SALOONDETAILS.GETALL);
  }
    searchShopLocation(searchString) {
        return this.http.post(APP_CONSTANT.SALOONDETAILS.SEARCH_SHOPLOCATION,JSON.stringify(searchString));
    }

    getShopLocationDetailsByID(id) {
        return this.http.post(APP_CONSTANT.SALOONDETAILS.GETByID, id);
    }

    getSalonNo() {
        return this.http.get(APP_CONSTANT.SALOONDETAILS.GETSALOONNO);
    }
}


