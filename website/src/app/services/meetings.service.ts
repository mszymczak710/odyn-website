import { Injectable } from '@angular/core';
import { Meetings } from '../models/meetings.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  constructor() {}
  getData() {
    return MEETINGS_DATA;
  }
}

const MEETINGS_DATA: Meetings[] = [
  {
    id: 1,
    date: '2022-11-07',
    startTime: '18:00',
    finishTime: '19:30',
    title: 'Spotkanie organizacyjne z koordynatorem przedmiotu',
    description: '(omówienie regulaminu przedmiotu, utworzenie zespołów)',
    isMeetingWithCoordinator: true,
    location: 'WMiI UMK (sala S9)',
  },
  {
    id: 2,
    date: '2022-11-14',
    startTime: '16:00',
    finishTime: '16:45',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(omówienie zasad zaliczenia, sprawy organizacyjne)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 3,
    date: '2022-11-22',
    startTime: '18:00',
    finishTime: '19:00',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(przedstawienie kilku propozycji aplikacji)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 4,
    date: '2022-12-06',
    startTime: '18:00',
    finishTime: '19:30',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(przedstawienie kilku propozycji aplikacji)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 5,
    date: '2022-12-20',
    startTime: '16:00',
    finishTime: '16:45',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(ocena możliwości realizacji projektu)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 6,
    date: '2023-01-10',
    startTime: '16:00',
    finishTime: '16:50',
    title: 'Spotkanie z opiekunem zespołu',
    description:
      '(dyskusja na temat struktury projektu, rozpoczęcie pisania aplikacji)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 7,
    date: '2023-01-17',
    startTime: '16:15',
    finishTime: '17:00',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(dyskusja nad rodzajem licencji)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 8,
    date: '2023-01-24',
    startTime: '16:15',
    finishTime: '17:15',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(rozmowa o dalszym rozwoju aplikacji)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 9,
    date: '2023-01-31',
    startTime: '16:15',
    finishTime: '16:45',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(rozmowa na temat raportów semestralnych)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 10,
    date: '2023-02-07',
    startTime: '16:15',
    finishTime: '16:25',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(podsumowanie tygodniowej pracy zespołu)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 11,
    date: '2023-02-08',
    startTime: '18:30',
    finishTime: '19:00',
    title: 'Spotkanie kontrolne z koordynatorem przedmiotu',
    description:
      '(podsumowanie pracy zespołu, rozmowa o dalszym rozwoju projektu)',
    isMeetingWithCoordinator: true,
    location: 'zdalnie',
  },
  {
    id: 12,
    date: '2023-02-14',
    startTime: '16:15',
    finishTime: '16:25',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(dyskusja na temat poprawek na stronie)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
  {
    id: 13,
    date: '2023-02-21',
    startTime: '16:15',
    finishTime: '16:40',
    title: 'Spotkanie z opiekunem zespołu',
    description: '(rozmowa o postępach zespołu w aplikacji)',
    isMeetingWithCoordinator: false,
    location: 'zdalnie',
  },
  {
    id: 14,
    date: '2023-03-07',
    startTime: '16:00',
    finishTime: '16:45',
    title: 'Spotkanie z opiekunem zespołu',
    description:
      '(ustalenie terminu spotkań, rozmowa o organizacji pracy - GitHub)',
    isMeetingWithCoordinator: false,
    location: 'WMiI UMK (sala L14)',
  },
];
