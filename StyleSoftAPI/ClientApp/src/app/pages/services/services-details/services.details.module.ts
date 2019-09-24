import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesDetailsComponent } from './services-details.component';

export const routes = [
    { path: '', component: ServicesDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [ServicesDetailsComponent]
})

export class ServicesDetailsModule { }