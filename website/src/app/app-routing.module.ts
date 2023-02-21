import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SemesterReportsComponent } from './semester-reports/semester-reports.component';
import { TeamComponent } from './team/team.component';
import { WorkProgressComponent } from './work-progress/work-progress.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';

const routes: Routes = [
  { path: 'documentation', component: DocumentationComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'semester-reports', component: SemesterReportsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'work-progress', component: WorkProgressComponent },
  { path: 'work-schedule', component: WorkScheduleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
