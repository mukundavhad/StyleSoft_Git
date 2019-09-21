import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrolledSalonDetailsComponent } from './enrolledsalon-details.component';

export const routes = [
    { path: '', component: EnrolledSalonDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    declarations: [EnrolledSalonDetailsComponent]
})

export class EnrolledSalonDetailsModule { }