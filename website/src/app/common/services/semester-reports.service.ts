import { Injectable } from '@angular/core';
import {
  SummerSemesterReports,
  WinterSemesterReports,
} from '../models/semester-reports.model';

@Injectable({
  providedIn: 'root',
})
export class SemesterReportsService {
  constructor() {}
  getWinterReportsData() {
    return WINTER_REPORTS_DATA;
  }
  getSummerReportsData() {
    return SUMMER_REPORTS_DATA;
  }
}

const WINTER_REPORTS_DATA: WinterSemesterReports[] = [
  {
    src: './assets/reports/winter/Raport Wojciech Kuźbiński.pdf',
    description: 'Raport Wojciecha',
  },
  {
    src: './assets/reports/winter/Raport Mateusz Szymczak.pdf',
    description: 'Raport Mateusza',
  },
  {
    src: './assets/reports/winter/Raport Damian Gałkowski.pdf',
    description: 'Raport Damiana',
  },
  {
    src: './assets/reports/winter/Raport Krzysztof Krzewiński.pdf',
    description: 'Raport Krzysztofa',
  },
  {
    src: './assets/reports/winter/Raport Jakub Orłowski.pdf',
    description: 'Raport Jakuba',
  },
  {
    src: './assets/reports/winter/Raport Viacheslav Kushnir.pdf',
    description: 'Raport Viacheslava',
  },
];

const SUMMER_REPORTS_DATA: SummerSemesterReports[] = [
  {
    src: './assets/reports/summer/Raport Wojciech Kuźbiński.pdf',
    description: 'Raport Wojciecha',
  },
  {
    src: './assets/reports/summer/Raport Mateusz Szymczak.pdf',
    description: 'Raport Mateusza',
  },
  {
    src: './assets/reports/summer/Raport Damian Gałkowski.pdf',
    description: 'Raport Damiana',
  },
  {
    src: './assets/reports/summer/Raport Krzysztof Krzewiński.pdf',
    description: 'Raport Krzysztofa',
  },
  {
    src: './assets/reports/summer/Raport Jakub Orłowski.pdf',
    description: 'Raport Jakuba',
  },
  {
    src: './assets/reports/summer/Raport Viacheslav Kushnir.pdf',
    description: 'Raport Viacheslava',
  },
];
