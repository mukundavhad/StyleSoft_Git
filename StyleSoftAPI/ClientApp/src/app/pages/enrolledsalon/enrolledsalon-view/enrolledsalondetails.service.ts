
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class EnrolledSalonDetailsService {
  constructor(private http: HttpClient) { }

  loadEnrolledSalonDetails() {
      return this.http.get(APP_CONSTANT.ENROLLEDSALONDETAILS.GETALL);
     
  }
    searchOwnerName(searchString) {
        return this.http.post(APP_CONSTANT.ENROLLEDSALONDETAILS.SEARCH_OWNERNAME, JSON.stringify(searchString));
    }

    getEnrolledSalonDetailsByID(id) {
        return this.http.post(APP_CONSTANT.ENROLLEDSALONDETAILS.GETByID, id);
    }

    getEnrolledSalonNo() {
        return this.http.get(APP_CONSTANT.ENROLLEDSALONDETAILS.GETENROLLEDSALONNO);
    }
}


