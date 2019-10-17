
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { APP_CONSTANT } from '../../../../config';
import { Observable } from 'rxjs';

@Injectable({
providedIn :'root'
})
export class AppointmentDetailsService {
  constructor(private http: HttpClient) { }

  loadAppointmentDetails() {
      return this.http.get(APP_CONSTANT.APPONTMENTDETAILS.GETALL);
    }

    getAppointmentNo() {
        return this.http.get(APP_CONSTANT.APPONTMENTDETAILS.GETAPPONTMENTNO);
    }

    saveAppointment(master): Observable<any> {
        return this.http.post(APP_CONSTANT.APPONTMENTDETAILS.SAVEAPPOINTMENTMASTER, master)
            .pipe((response: any) => {
                return response;
            });
    }
}


