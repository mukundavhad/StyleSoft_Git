import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceCategoryDetailsComponent } from './servicecategory-details.component';

export const routes = [
    { path: '', component: ServiceCategoryDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
        CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [ServiceCategoryDetailsComponent]
})

export class ServiceCategoryDetailsModule { }