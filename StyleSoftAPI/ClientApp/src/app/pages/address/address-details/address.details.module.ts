import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressDetailsComponent } from './address-details.component';

export const routes = [
    { path: '', component: AddressDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [AddressDetailsComponent]
})

export class AddressDetailsModule { }