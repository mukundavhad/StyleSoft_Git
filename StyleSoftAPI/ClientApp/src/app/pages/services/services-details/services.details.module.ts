import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesDetailsComponent } from './services-details.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

export const routes = [
    { path: '', component: ServicesDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [ServicesDetailsComponent]
})

export class ServicesDetailsModule { }