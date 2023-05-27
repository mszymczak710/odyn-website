import { Injectable } from '@angular/core';
import { Technologies } from '../models/technologies.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  constructor() {}
  getData() {
    return TECHNOLOGIES_DATA;
  }
}

const TECHNOLOGIES_DATA: Technologies[] = [
  {
    href: 'http://typescriptlang.org/',
    imageSrc:
      './assets/images/project-info/technologies/Typescript_logo_2020.png',
    imageAlt: 'TypeScript',
  },
  {
    href: 'http://angular.io',
    imageSrc:
      './assets/images/project-info/technologies/Angular_full_color_logo.png',
    imageAlt: 'Angular',
  },
  {
    href: 'http:///developer.android.com/studio',
    imageSrc:
      './assets/images/project-info/technologies/Android_Studio_Icon_3.6.png',
    imageAlt: 'Android Studio',
  },
  {
    href: 'http://github.com',
    imageSrc: './assets/images/project-info/technologies/github.png',
    imageAlt: 'GitHub',
  },
  {
    href: '"http://discord.com',
    imageSrc: './assets/images/project-info/technologies/discord.png',
    imageAlt: 'Discord',
  },
  {
    href: 'http://tensorflow.org/',
    imageSrc: './assets/images/project-info/technologies/TensorFlow_logo.png',
    imageAlt: 'Tensor Flow',
  },
  {
    href: 'http://trello.com/pl',
    imageSrc: './assets/images/project-info/technologies/Trello_logo.png',
    imageAlt: 'Trello',
  },
  {
    href: 'http://kotlinlang.org',
    imageSrc: './assets/images/project-info/technologies/Kotlin_logo.png',
    imageAlt: 'Kotlin',
  },
  {
    href: 'http://java.com/pl/',
    imageSrc:
      './assets/images/project-info/technologies/Java_programming_language_logo.png',
    imageAlt: 'Java',
  },
];
