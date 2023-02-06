import { Injectable } from '@angular/core';
import { WorkSchedule } from '../models/work-schedule.model';

@Injectable({
  providedIn: 'root',
})
export class WorkScheduleService {
  constructor() {}
  getData() {
    return ELEMENT_DATA;
  }
}

const ELEMENT_DATA: WorkSchedule[] = [
  {
    month: 'Listopad',
    year: 2022,
    details: 'Ustalenie zamysłu projektu',
    done: 'yes',
  },
  {
    month: 'Grudzień',
    year: 2022,
    details: 'Utworzenie repozytorium na GitHub, stworzenie strony WWW',
    done: 'yes',
  },
  {
    month: 'Styczeń',
    year: 2023,
    details: 'Praca nad wstępną wersją aplikacji',
    done: 'still-working',
  },
  {
    month: 'Luty',
    year: 2023,
    details: 'Finalizacja podstawowej wersji aplikacji (nagrywanie, zapis)',
    done: 'no',
  },
  {
    month: 'Marzec',
    year: 2023,
    details: 'Rozwój modułu odpowiedzialnego za analizę obrazu',
    done: 'no',
  },
  {
    month: 'Kwiecień',
    year: 2023,
    details: 'Dodawanie funkcji, rozwój możliwości, ulepszanie aplikacji',
    done: 'no',
  },
  {
    month: 'Maj',
    year: 2023,
    details:
      'Finalizacja projektu, umieszczenie pełnej dokumentacji, przygotowanie prezentacji',
    done: 'no',
  },
  {
    month: 'Czerwiec',
    year: 2023,
    details: 'Publiczna prezentacja projektu',
    done: 'no',
  },
];
