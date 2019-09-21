import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
//import { AgGridModule } from 'ag-grid-angular';
//import { AutoCompleteModule } from 'primeng/autocomplete';
//import { CalendarModule } from 'primeng/calendar';
//import { ValidationBorderModule } from '../../validation-border/validation-border.module';
//import { DialogModule } from '../../dialog/dialog.module';
//import { AutoCompleteModule } from 'primeng';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { StaffViewComponent } from './staff-view.component';

export const routes = [
    { path: '', component: StaffViewComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
        FormsModule,
        GridModule,
        //DialogModule,
        //CalendarModule,
        //AutoCompleteModule,
        ReactiveFormsModule,
        //ValidationBorderModule,
        CommonModule
  ],
  declarations: [StaffViewComponent]
  
})
export class StaffViewModule {
 
 }
