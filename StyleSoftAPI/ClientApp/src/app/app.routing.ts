import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { SaloonDetailsComponent } from './pages/saloon/saloon-details/saloon-details.component';
import { SaloonViewComponent } from './pages/saloon/saloon-view/saloon-view.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
           // { path: 'saloonview', loadChildren: './pages/saloon/saloon-view/saloon.view.module#SaloonViewModule', data: { breadcrumb: 'Saloon View' } },
            { path: 'saloonview', component: SaloonViewComponent, data: { breadcrumb: 'Saloon View' } },

            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            //{ path: 'saloon', component: SaloonDetailsComponent, data: { breadcrumb: 'Saloon Details' } },
            //{ path: 'saloonview', component: SaloonViewComponent, data: { breadcrumb: 'Saloon View Details' } },
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