import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  constructor(@Inject(LOCALE_ID) public override locale: any) {
    super(locale);
  }
  override getFirstDayOfWeek() {
    return 1;
  }

  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'];
  }
}
