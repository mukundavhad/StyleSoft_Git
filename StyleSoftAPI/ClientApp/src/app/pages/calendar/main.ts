import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppCalendarModule } from './app-calendar.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppCalendarModule);