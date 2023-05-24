import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-finish-time',
  templateUrl: './finish-time.component.html',
  styleUrls: ['./finish-time.component.scss'],
})
export class FinishTimeComponent implements AfterViewInit {
  targetDate: any = new Date('2023-06-01T13:00:00');
  timeDifference: number;
  @ViewChild('weeks', { static: true }) weeks: ElementRef;
  @ViewChild('days', { static: true }) days: ElementRef;
  @ViewChild('hours', { static: true }) hours: ElementRef;
  @ViewChild('minutes', { static: true }) minutes: ElementRef;
  @ViewChild('seconds', { static: true }) seconds: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      this.calculateCountdown();
      this.updateCountdown();
    }, 1000);
  }

  calculateCountdown() {
    const now = new Date().getTime();
    this.timeDifference = this.targetDate.getTime() - now;
  }

  updateCountdown() {
    const weeks = Math.floor(this.timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(
      (this.timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (this.timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (this.timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((this.timeDifference % (1000 * 60)) / 1000);

    this.weeks.nativeElement.innerText = this.formatTime(weeks);
    this.days.nativeElement.innerText = this.formatTime(days);
    this.hours.nativeElement.innerText = this.formatTime(hours);
    this.minutes.nativeElement.innerText = this.formatTime(minutes);
    this.seconds.nativeElement.innerText = this.formatTime(seconds);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }
}
