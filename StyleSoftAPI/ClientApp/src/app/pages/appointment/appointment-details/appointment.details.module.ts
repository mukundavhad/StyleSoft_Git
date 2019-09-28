import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { AppointmentDetailsComponent } from './appointment-details.component';

export const routes = [
    { path: '', component: AppointmentDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [AppointmentDetailsComponent]
})

export class AppointmentDetailsModule { }