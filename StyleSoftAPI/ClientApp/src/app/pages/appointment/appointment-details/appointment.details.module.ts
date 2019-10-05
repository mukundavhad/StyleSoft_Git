import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CalendarModule } from 'primeng/calendar';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

export const routes = [
    { path: '', component: AppointmentDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        AutoCompleteModule,
        DateTimePickerModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [AppointmentDetailsComponent]
})

export class AppointmentDetailsModule { }