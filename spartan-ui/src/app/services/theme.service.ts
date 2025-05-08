import { Injectable } from '@angular/core';

export enum Theme {
  Light,
  Dark,
  System,
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: Theme = Theme.System;

  constructor() {}
}
