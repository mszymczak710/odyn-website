import { Injectable } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { WorkProgress } from '../models/work-progress.model';

@Injectable({
  providedIn: 'root',
})
export class WorkProgressService {
  constructor() {}
  getData() {
    return WORK_PROGRESS_DATA;
  }
}

const WORK_PROGRESS_DATA: WorkProgress[] = [
  {
    date: '06.12.2022',
    details: 'Wybranie tematu projektu',
    icon: PrimeIcons.COG,
    color: '#666',
  },
  {
    date: '09.12.2022',
    details: 'Wykonanie strony internetowej',
    icon: PrimeIcons.COG,
    color: '#666',
  },
  {
    date: '19.12.2022',
    details: 'Utworzenie repozytorium na GitHub',
    icon: PrimeIcons.COG,
    color: '#666',
  },
  {
    date: '20.12.2022',
    details: 'Ustalenie sposobu działania przygotowywanej aplikacji',
    icon: PrimeIcons.COG,
    color: '#666',
  },
  {
    date: '17.01.2023',
    details: 'Stworzenie wersji pre-pre-alpha aplikacji',
    icon: PrimeIcons.COG,
    color: '#666',
  },
];
