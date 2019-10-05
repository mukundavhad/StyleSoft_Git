import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from '../../../theme/directives/directives.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SmartComponent } from '../../tables/dynamic-tables/smart/smart.component';
import { NgxComponent } from '../../tables/dynamic-tables/ngx/ngx.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCategoryViewComponent } from './servicecategory-view.component';

export const routes = [
    { path: '', component: ServiceCategoryViewComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
        CommonModule,
      HttpClientModule,
        RouterModule,
        Ng2SmartTableModule,
        NgxDatatableModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      ServiceCategoryViewComponent,
      SmartComponent,
      NgxComponent    
  ]
})
export class ServiceCategoryViewModule { }
