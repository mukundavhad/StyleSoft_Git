import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
//import { AgGridModule } from 'ag-grid-angular';
import { AutoCompleteModule } from 'primeng/autocomplete';
//import { CalendarModule } from 'primeng/calendar';
//import { ValidationBorderModule } from '../../validation-border/validation-border.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '../../../dialog/dialog.module';
import { AppointmentViewComponent } from './appointment-view.component';

@NgModule({
  imports: [
        FormsModule,
        GridModule,
        DialogModule,
        //CalendarModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        //ValidationBorderModule,
        CommonModule
  ],
   declarations: [AppointmentViewComponent],
    exports: [AppointmentViewComponent],
   providers: [PageService,
       SortService,
       FilterService,
       GroupService]

})
  export class AppointmentViewModule {
 
 }
