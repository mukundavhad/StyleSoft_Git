
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';

@Injectable({
providedIn :'root'
})
export class AppointmentDetailsService {
  constructor(private http: HttpClient) { }

  loadAppointmentDetails() {
      return this.http.get(APP_CONSTANT.APPONTMENTDETAILS.GETALL);
     
  }
    

  //getCustomerByID(id) {
  //  return this.http.post(APP_CONSTANT.CUSOTMER_API.GETByID,id);
  //}

}


