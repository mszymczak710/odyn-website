import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {
  CustomDateAdapter,
  CustomHeader,
  MeetingsComponent,
} from './meetings/meetings.component';
import { MeetingsDialogComponent } from './meetings-dialog/meetings-dialog.component';
import { FinishTimeComponent } from './finish-time/finish-time.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TeamComponent } from './team/team.component';
import { WorkProgressComponent } from './work-progress/work-progress.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { RouterModule } from '@angular/router';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CdTimerModule } from 'angular-cd-timer';
import { MaterialModule } from './material.module';
import { MeetingsService } from './services/meetings.service';
import { TeamService } from './services/team.service';
import { WorkScheduleService } from './services/work-schedule.service';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import localePl from '@angular/common/locales/pl';
import { FormsModule } from '@angular/forms';
import { SemesterReportsComponent } from './semester-reports/semester-reports.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SemesterReportsService } from './services/semester-reports.service';
import { LicenseDialogComponent } from './license-dialog/license-dialog.component';

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
    MeetingsService,
    SemesterReportsService,
    TeamService,
    WorkScheduleService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
