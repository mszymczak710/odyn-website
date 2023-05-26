import { Component, OnInit } from '@angular/core';
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
export class SemesterReportsComponent implements OnInit {
  winterReports: WinterSemesterReports[];
  summerReports: SummerSemesterReports[];

  constructor(private dataService: SemesterReportsService) {}

  ngOnInit() {
    this.winterReports = this.dataService.getWinterReportsData();
    this.summerReports = this.dataService.getSummerReportsData();
  }
}
