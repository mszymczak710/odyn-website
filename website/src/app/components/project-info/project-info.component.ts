import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LicenseDialogComponent } from './license-dialog/license-dialog.component';
import { Technologies } from '../../common/models/technologies.model';
import { TechnologiesService } from '../../common/services/technologies.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private dataService: TechnologiesService
  ) {}

  technologies: Technologies[];

  ngOnInit() {
    this.technologies = this.dataService.getData();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.enterAnimationDuration = '500ms';

    this.dialog.open(LicenseDialogComponent, dialogConfig);
  }
}
