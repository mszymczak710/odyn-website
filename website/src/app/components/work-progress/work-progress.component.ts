import { Component } from '@angular/core';
import * as AOS from 'aos';
import { WorkProgress } from '../../common/models/work-progress.model';
import { WorkProgressService } from '../../common/services/work-progress.service';

@Component({
  selector: 'app-work-progress',
  templateUrl: './work-progress.component.html',
  styleUrls: ['./work-progress.component.scss'],
})
export class WorkProgressComponent {
  events: WorkProgress[];

  constructor(private dataService: WorkProgressService) {}

  ngOnInit() {
    this.events = this.dataService.getData();

    AOS.init({
      disable: function () {
        let maxWidth = 0;
        return window.innerWidth < maxWidth;
      },
    });
  }
}
