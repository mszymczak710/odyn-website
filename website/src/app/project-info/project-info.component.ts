import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LicenseDialogComponent } from '../license-dialog/license-dialog.component';
import { Technologies } from '../models/technologies.model';
import { TechnologiesService } from '../services/technologies.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {
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

    const dialogRef = this.dialog.open(LicenseDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed' + result);
    });
  }
}
