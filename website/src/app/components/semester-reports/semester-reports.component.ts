import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {
  SummerSemesterReports,
  WinterSemesterReports,
} from '../../common/models/semester-reports.model';
import { SemesterReportsService } from '../../common/services/semester-reports.service';

@Component({
  selector: 'app-semester-reports',
  templateUrl: './semester-reports.component.html',
  styleUrls: ['./semester-reports.component.scss'],
})
export class SemesterReportsComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  winterReports: WinterSemesterReports[];
  summerReports: SummerSemesterReports[];

  constructor(
    private snackBar: MatSnackBar,
    private dataService: SemesterReportsService
  ) {}

  ngOnInit() {
    this.winterReports = this.dataService.getWinterReportsData();
    this.summerReports = this.dataService.getSummerReportsData();
  }

  alertMessage() {
    let message: any;

    message = 'Do dnia 25.05.2023 pojawią się raporty semestralne.';

    this.snackBar.open(message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3500,
    });
  }
}
