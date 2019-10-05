import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ToastrModule } from 'ngx-toastr';
import { PipesModule } from './theme/pipes/pipes.module';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './theme/components/header/header.component';
import { FooterComponent } from './theme/components/footer/footer.component';
import { SidebarComponent } from './theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from './theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from './theme/components/back-top/back-top.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { SideChatComponent } from './theme/components/side-chat/side-chat.component';
import { FavoritesComponent } from './theme/components/favorites/favorites.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { AddressDetailsModule } from './pages/address/address-details/address.details.module';
import { SaloonDetailsModule } from './pages/saloon/saloon-details/saloon.details.module';
import { SaloonViewComponent } from './pages/saloon/saloon-view/saloon-view.component';
import { ServiceCategoryDetailsModule } from './pages/servicecategory/servicecategory-details/servicecategory.details.module';
import { ServiceCategoryViewComponent } from './pages/servicecategory/servicecategory-view/servicecategory-view.component';
import { StaffDetailsModule } from './pages/staff/staff-details/staff.details.module';
import { StaffViewComponent } from './pages/staff/staff-view/staff-view.component';
import { AddressViewComponent } from './pages/address/address-view/address-view.component';
import { DialogModule } from './dialog/dialog.module';
import { EnrolledSalonDetailsModule } from './pages/enrolledsalon/enrolledsalon-details/enrolledsalon.details.module';
import { EnrolledSalonViewComponent } from './pages/enrolledsalon/enrolledsalon-view/enrolledsalon-view.component';
import { ServicesDetailsModule } from './pages/services/services-details/services.details.module';
import { ServicesViewComponent } from './pages/services/services-view/services-view.component';
import { AppointmentDetailsModule } from './pages/appointment/appointment-details/appointment.details.module';
import { AppointmentViewComponent } from './pages/appointment/appointment-view/appointment-view.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DialogRef } from './dialog/dialog-ref';


@NgModule({  
  imports: [
        BrowserModule,
        DialogModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        Ng2SmartTableModule,
        HttpClientModule,
        NgxDatatableModule,
        DateTimePickerModule,
    FormsModule,
    PerfectScrollbarModule,
    NgbModule,
    MultiselectDropdownModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLf9Ywk47zipEtorDewwMmB3JtuXdzYL4'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ToastrModule.forRoot(), 
    PipesModule,
        routing,
        AddressDetailsModule,
        SaloonDetailsModule,
        ServiceCategoryDetailsModule,
        ServicesDetailsModule,
        StaffDetailsModule,
        EnrolledSalonDetailsModule,
    AppointmentDetailsModule
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
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FlagsMenuComponent,
    SideChatComponent,
    FavoritesComponent,
    BlankComponent,
    SearchComponent,
      NotFoundComponent,
      SaloonViewComponent,
      AddressViewComponent,
      ServiceCategoryViewComponent,
      ServicesViewComponent,
      StaffViewComponent,
      EnrolledSalonViewComponent,
      AppointmentViewComponent
  ],
    providers: [ 
        DialogRef,
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
