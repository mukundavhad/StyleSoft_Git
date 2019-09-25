import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SaloonViewComponent } from './pages/saloon/saloon-view/saloon-view.component';
import { EnrolledSalonViewComponent } from './pages/enrolledsalon/enrolledsalon-view/enrolledsalon-view.component';
import { AddressViewComponent } from './pages/address/address-view/address-view.component';
import { CustomerViewComponent } from './pages/Customer/customer-view/customer-view.component';
import { StaffViewComponent } from './pages/staff/staff-view/staff-view.component';
import { ServiceCategoryViewComponent } from './pages/servicecategory/servicecategory-view/servicecategory-view.component';
import { ServicesViewComponent } from './pages/services/services-view/services-view.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'saloonview', component: SaloonViewComponent, data: { breadcrumb: 'Saloon Details' } },
            { path: 'addressview', component: AddressViewComponent, data: { breadcrumb: 'Address Details' } },
            { path: 'enrolledsalonview', component: EnrolledSalonViewComponent, data: { breadcrumb: 'Enrolled Saloon' } },
            { path: 'customerview', component: CustomerViewComponent, data: { breadcrumb: 'Customer Details' } },
            { path: 'staffview', component: StaffViewComponent, data: { breadcrumb: 'Staff Details' } },
            { path: 'servicecategoryview', component: ServiceCategoryViewComponent, data: { breadcrumb: 'Service Category' } },
            { path: 'servicesview', component: ServicesViewComponent, data: { breadcrumb: 'Services' } },
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
        ]
    },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //preloadingStrategy: PreloadAllModules,  // <- comment this line for enable lazy load
     useHash: true
});