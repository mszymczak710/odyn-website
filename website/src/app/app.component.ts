import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'odyn';
  constructor(private snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit() {
    AOS.init({
      disable: function () {
        let maxWidth = 1024;
        return window.innerWidth < maxWidth;
      },
    });

    this.snackBar.open('Prace nad stroną dalej trwają...', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3500,
    });
  }

  onActivate() {
    let height = window.innerHeight;
    window.scrollTo({ left: 0, top: height, behavior: 'smooth' });
  }
}
