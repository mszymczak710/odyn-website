import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'odyn';

  ngOnInit() {
    AOS.init({
      disable: function () {
        let maxWidth = 1024;
        return window.innerWidth < maxWidth;
      },
    });
  }

  onActivate() {
    let height = window.innerHeight;
    setTimeout(() => {
      window.scrollTo({ left: 0, top: height, behavior: 'smooth' });
    }, 1000);
  }
}
