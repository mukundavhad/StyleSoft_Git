import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { AppointmentDetailsComponent } from './appointment-details.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentDetailsComponent,
    data: {
      title: 'Appointment Details'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentDetailsRoutingModule { }
