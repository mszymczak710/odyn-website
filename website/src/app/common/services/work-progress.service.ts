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
    icon: PrimeIcons.INFO_CIRCLE,
    color: '#666',
  },
  {
    date: '09.12.2022',
    details: 'Wykonanie strony internetowej',
    icon: PrimeIcons.CODE,
    color: '#666',
  },
  {
    date: '19.12.2022',
    details: 'Utworzenie repozytorium na GitHub',
    icon: PrimeIcons.GITHUB,
    color: '#666',
  },
  {
    date: '20.12.2022',
    details: 'Ustalenie sposobu działania przygotowywanej aplikacji',
    icon: PrimeIcons.THUMBS_UP,
    color: '#666',
  },
  {
    date: '17.01.2023',
    details: 'Stworzenie wersji pre-pre-alpha aplikacji',
    icon: PrimeIcons.COG,
    color: '#666',
  },
  {
    date: '06.02.2023',
    details: 'Publikacja raportów z semestru zimowego 2022/2023',
    icon: PrimeIcons.FILE_WORD,
    color: '#666',
  },
  {
    date: '20.02.2023',
    details: 'Stworzenie LICENSE.md i README.md dla repozytoriów',
    icon: PrimeIcons.COPY,
    color: '#666',
  },
  {
    date: '30.03.2023',
    details: 'Ukończenie funkcjonalności nagrywania',
    icon: PrimeIcons.VIDEO,
    color: '#666',
  },
  {
    date: '26.04.2023',
    details: 'Utworzenie GPS dla aplikacji',
    icon: PrimeIcons.MAP_MARKER,
    color: '#666',
  },
  {
    date: '07.05.2023',
    details: 'Stworzenie dokumentacji technicznej',
    icon: PrimeIcons.BOOK,
    color: '#666',
  },
];
