import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AppCalendarComponent } from './app-calendar.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ScheduleModule,
        ButtonModule
    ],
    declarations: [AppCalendarComponent],
    bootstrap: [AppCalendarComponent],
    providers: [DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService]
})
export class AppCalendarModule { }