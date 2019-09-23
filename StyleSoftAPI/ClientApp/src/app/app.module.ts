import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { HeaderComponent } from './theme/components/header/header.component';
import { FooterComponent } from './theme/components/footer/footer.component';
import { SidebarComponent } from './theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from './theme/components/back-top/back-top.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SaloonViewModule } from "./pages/saloon/saloon-view/saloon.view.module";
import { DialogModule } from "./dialog/dialog.module";
import { SaloonDetailsModule } from "./pages/saloon/saloon-details/saloon.details.module";
import { EnrolledSalonDetailsModule } from './pages/enrolledsalon/enrolledsalon-details/enrolledsalon.details.module';
import { EnrolledSalonViewModule } from './pages/enrolledsalon/enrolledsalon-view/enrolledsalon.view.module';
import { AddressDetailsModule } from './pages/address/address-details/address.details.module';
import { AddressViewModule } from './pages/address/address-view/address.view.module';
import { CustomerDetailsModule } from './pages/Customer/customer-details/customer.details.module';
import { CustomerViewModule } from './pages/Customer/customer-view/customer.view.module';
import { StaffDetailsModule } from './pages/staff/staff-details/staff.details.module';
import { StaffViewModule } from './pages/staff/staff-view/staff.view.module';


@NgModule({  
    imports: [
        CommonModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        PerfectScrollbarModule,
        HttpClientModule,
        routing,
        SaloonViewModule,
        DialogModule,
        SaloonDetailsModule,
        EnrolledSalonDetailsModule,
        EnrolledSalonViewModule,
        AddressDetailsModule,
        AddressViewModule,
        CustomerDetailsModule,
        CustomerViewModule,
        StaffDetailsModule,
        StaffViewModule
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    UserMenuComponent,
    BlankComponent,
    SearchComponent,    
    NotFoundComponent,

  ],
  providers: [ 
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
