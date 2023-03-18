import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}
