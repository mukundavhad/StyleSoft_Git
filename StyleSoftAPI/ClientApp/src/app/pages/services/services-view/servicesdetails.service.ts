
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class ServicesDetailsService {
  constructor(private http: HttpClient) { }

  loadServicesDetails() {
      return this.http.get(APP_CONSTANT.SERVICESDETAILS.GETALL);
  }

  getServicesDetailsByID(id) {
      return this.http.post(APP_CONSTANT.SERVICESDETAILS.GETByID,id);
    }

    getServiceNo() {
        return this.http.get(APP_CONSTANT.SERVICESDETAILS.GETSERVICENO);
    }

}


