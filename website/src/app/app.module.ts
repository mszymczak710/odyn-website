import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CameraScreenComponent } from './components/camera-screen/camera-screen.component';
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
import { CustomHeader } from './components/meetings/custom-header/custom-header.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { FinishTimeComponent } from './components/finish-time/finish-time.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LicenseDialogComponent } from './components/project-info/license-dialog/license-dialog.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MeetingsDialogComponent } from './components/meetings/meetings-dialog/meetings-dialog.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { SemesterReportsComponent } from './components/semester-reports/semester-reports.component';
import { TeamComponent } from './components/team/team.component';
import { WorkProgressComponent } from './components/work-progress/work-progress.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';
import { CustomDateAdapter } from './common/custom-date-adapter';

registerLocaleData(localePl);
@NgModule({
  declarations: [
    AppComponent,
    CameraScreenComponent,
    CustomHeader,
    DocumentationComponent,
    FinishTimeComponent,
    FooterComponent,
    HeaderComponent,
    LicenseDialogComponent,
    MeetingsComponent,
    MeetingsDialogComponent,
    PageNotFoundComponent,
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
