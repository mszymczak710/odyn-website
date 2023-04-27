import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { SemesterReportsComponent } from './components/semester-reports/semester-reports.component';
import { TeamComponent } from './components/team/team.component';
import { WorkProgressComponent } from './components/work-progress/work-progress.component';
import { WorkScheduleComponent } from './components/work-schedule/work-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: 'project-info', pathMatch: 'full' },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'project-info', component: ProjectInfoComponent },
  { path: 'semester-reports', component: SemesterReportsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'work-progress', component: WorkProgressComponent },
  { path: 'work-schedule', component: WorkScheduleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
