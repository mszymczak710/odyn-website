import { Injectable } from '@angular/core';
import { Meetings } from '../models/meetings.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  constructor() {}
  getData() {
    return ELEMENT_DATA;
  }
}

const ELEMENT_DATA: Meetings[] = [
  {
    position: 0,
    date: '2022-11-07',
    start_time: '18:00',
    finish_time: '19:30',
    description1: 'Spotkanie organizacyjne z koordynatorem przedmiotu',
    description2: '(omówienie regulaminu przedmiotu, utworzenie zespołów)',
  },
  {
    position: 1,
    date: '2022-11-14',
    start_time: '16:00',
    finish_time: '16:45',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(omówienie zasad zaliczenia, sprawy organizacyjne)',
  },
  {
    position: 2,
    date: '2022-11-22',
    start_time: '18:00',
    finish_time: '19:00',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(przedstawienie kilku propozycji aplikacji)',
  },
  {
    position: 3,
    date: '2022-12-06',
    start_time: '18:00',
    finish_time: '19:30',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(przedstawienie kilku propozycji aplikacji)',
  },
  {
    position: 4,
    date: '2022-12-20',
    start_time: '16:00',
    finish_time: '16:45',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(ocena możliwości realizacji projektu)',
  },
  {
    position: 5,
    date: '2023-01-10',
    start_time: '16:00',
    finish_time: '16:50',
    description1: 'Spotkanie z opiekunem zespołu',
    description2:
      '(dyskusja na temat struktury projektu, rozpoczęcie pisania aplikacji)',
  },
  {
    position: 6,
    date: '2023-01-17',
    start_time: '16:15',
    finish_time: '17:00',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(dyskusja nad rodzajem licencji)',
  },
  {
    position: 7,
    date: '2023-01-24',
    start_time: '16:15',
    finish_time: '17:15',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(rozmowa o dalszym rozwoju aplikacji)',
  },
  {
    position: 8,
    date: '2023-01-31',
    start_time: '16:15',
    finish_time: '16:45',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(rozmowa na temat raportów semestralnych)',
  },
  {
    position: 9,
    date: '2023-02-07',
    start_time: '16:15',
    finish_time: '',
    description1: 'Spotkanie z opiekunem zespołu',
    description2: '(...)',
  },
  {
    position: 10,
    date: '2023-02-07',
    start_time: '18:30',
    finish_time: '',
    description1: 'Spotkanie kontrolne z koordynatorem przedmiotu',
    description2: '(...)',
  },
];
