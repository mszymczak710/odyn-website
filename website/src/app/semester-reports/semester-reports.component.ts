import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-semester-reports',
  templateUrl: './semester-reports.component.html',
  styleUrls: ['./semester-reports.component.scss']
})
export class SemesterReportsComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar) {}

  alertMessage(semester: number) {
    let message: any;

    if(semester === 1) {
      message = "Do dnia 06.02.2023 pojawią się raporty semestralne.";
    } else {
      message = "Do dnia 25.05.2023 pojawią się raporty semestralne.";
    }

    this.snackBar.open(message, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3500,
    });
  }
}
