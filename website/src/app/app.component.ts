import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'odyn';

  constructor(private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  navigateTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    AOS.init({
      disable: function () {
        let maxWidth = 1024;
        return window.innerWidth < maxWidth;
      },
    });

    this.snackBar.open("Prace nad stroną dalej trwają...", 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3500,
  });

    this.activatedRoute.fragment.subscribe((value) => {
      this.navigateTo(value);
    });
  }
}
