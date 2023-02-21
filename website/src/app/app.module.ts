import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CdTimerModule } from 'angular-cd-timer';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import localePl from '@angular/common/locales/pl';
import { MaterialModule } from './material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentationComponent } from './documentation/documentation.component';
import { FinishTimeComponent } from './finish-time/finish-time.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LicenseDialogComponent } from './license-dialog/license-dialog.component';
import {
  CustomDateAdapter,
  CustomHeader,
  MeetingsComponent,
} from './meetings/meetings.component';
import { MeetingsDialogComponent } from './meetings-dialog/meetings-dialog.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SemesterReportsComponent } from './semester-reports/semester-reports.component';
import { TeamComponent } from './team/team.component';
import { WorkProgressComponent } from './work-progress/work-progress.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';

registerLocaleData(localePl);
@NgModule({
  declarations: [
    AppComponent,
    CustomHeader,
    DocumentationComponent,
    FinishTimeComponent,
    FooterComponent,
    HeaderComponent,
    LicenseDialogComponent,
    MeetingsComponent,
    MeetingsDialogComponent,
    ProjectInfoComponent,
    SemesterReportsComponent,
    TeamComponent,
    WorkProgressComponent,
    WorkScheduleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    CdTimerModule,
    FormsModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
