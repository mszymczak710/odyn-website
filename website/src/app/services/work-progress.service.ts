import { Injectable } from '@angular/core';
import { WorkProgress } from '../models/work-progress.model';

@Injectable({
  providedIn: 'root',
})
export class WorkProgressService {
  constructor() {}
  getData() {
    return ELEMENT_DATA;
  }
}

const ELEMENT_DATA: WorkProgress[] = [
  {
    year: 2022,
    month: '12',
    day: '06',
    details: 'Wybranie tematu projektu',
  },
  {
    year: 2022,
    month: '12',
    day: '09',
    details: 'Wykonanie strony internetowej',
  },
  {
    year: 2022,
    month: '12',
    day: '19',
    details: 'Utworzenie repozytorium na GitHub',
  },
  {
    year: 2022,
    month: '12',
    day: '20',
    details: 'Ustalenie sposobu działania przygotowywanej aplikacji',
  },
  {
    year: 2023,
    month: '01',
    day: '17',
    details: 'Stworzenie wersji pre-pre-alpha aplikacji',
  },
];
