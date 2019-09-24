import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
//import { AgGridModule } from 'ag-grid-angular';
//import { AutoCompleteModule } from 'primeng/autocomplete';
//import { CalendarModule } from 'primeng/calendar';
//import { ValidationBorderModule } from '../../validation-border/validation-border.module';
//import { DialogModule } from '../../dialog/dialog.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ServicesViewComponent } from './services-view.component';

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
   declarations: [ServicesViewComponent],
    exports: [ServicesViewComponent],
   providers: [PageService,
       SortService,
       FilterService,
       GroupService]

})
  export class ServicesViewModule {
 
 }
