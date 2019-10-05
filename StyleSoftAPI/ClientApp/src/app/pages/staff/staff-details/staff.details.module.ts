import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffDetailsComponent } from './staff-details.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

export const routes = [
    { path: '', component: StaffDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        AutoCompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StaffDetailsComponent]
})

export class StaffDetailsModule { }