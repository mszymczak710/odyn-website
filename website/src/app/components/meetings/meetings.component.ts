import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MeetingsService } from '../../common/services/meetings.service';
import { Meetings } from '../../common/models/meetings.model';
import { MeetingsDialogComponent } from './meetings-dialog/meetings-dialog.component';
import { CustomHeader } from './custom-header/custom-header.component';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
})
export class MeetingsComponent {
  customHeader = CustomHeader;
  selectedDate: Date | null;
  minDate = new Date('2022/11/01');
  maxDate = new Date('2023/06/01');
  dataSource: Meetings[];
  meet: Meetings;
  constructor(public dialog: MatDialog, private dataService: MeetingsService) {}

  ngOnInit() {
    this.dataSource = this.dataService.getData();
  }

  public getFirstDayOfWeek(): number {
    return 1;
  }

  disableWeekendsFilter = (d: Date): boolean => {
    return d.getDay() !== 0 && d.getDay() !== 6;
  };

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.dataSource
        .map((meet) => new Date(meet.date))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );

      const meetWithCoordinator = this.dataSource
        .filter((meet) => meet.isMeetingWithCoordinator === true)
        .map((meet) => new Date(meet.date))
        .some(
          (d) =>
            d.getDate() === date.getDate() &&
            d.getMonth() === date.getMonth() &&
            d.getFullYear() === date.getFullYear()
        );

      if (meetWithCoordinator) return 'coordinator-date';
      else if (highlightDate) return 'meet-date';
      else return '';
    };
  }

  isSelectedValidDate = (date: Date): boolean => {
    const highlightDate = this.dataSource
      .map((meet) => new Date(meet.date))
      .some(
        (d) =>
          d.getDate() === date.getDate() &&
          d.getMonth() === date.getMonth() &&
          d.getFullYear() === date.getFullYear()
      );

    if (!highlightDate) return false;
    else return true;
  };

  openDialog(value: Meetings): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = value;
    dialogConfig.disableClose = true;
    dialogConfig.enterAnimationDuration = '500ms';

    this.dialog.open(MeetingsDialogComponent, dialogConfig);
  }

  onSelectedChange(event: Date) {
    let meetingInfo = document.getElementsByClassName(
      'span-info'
    )[0] as HTMLElement;
    if (!this.isSelectedValidDate(this.selectedDate)) {
      meetingInfo.style.opacity = '1';
      meetingInfo.textContent = 'Brak wydarzeń tego dnia!';
      setTimeout(function () {
        meetingInfo.style.opacity = '0';
      }, 2000);
    } else {
      meetingInfo.style.opacity = '0';
      for (let item of this.dataSource) {
        if (
          event.getFullYear() === new Date(item.date).getFullYear() &&
          event.getMonth() === new Date(item.date).getMonth() &&
          event.getDate() === new Date(item.date).getDate()
        ) {
          this.openDialog(item);
          this.selectedDate = null;
        }
      }
    }
  }
}
