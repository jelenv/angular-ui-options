import { Injectable, signal } from '@angular/core';

export enum Theme {
  Light,
  Dark,
  System,
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  theme = signal<Theme>(Theme.System);

  constructor() {
    this.initTheme();
    if (this.theme() === Theme.System) {
      this.systemDarkMode.addEventListener('change', () => this.updateTheme());
    }
  }

  setTheme(newTheme: Theme) {
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme.toString());
    this.updateTheme();
  }

  toggleTheme() {
    const currentTheme = this.theme();
    if (currentTheme === Theme.System) {
      this.setTheme(this.systemDarkMode.matches ? Theme.Light : Theme.Dark);
    } else {
      this.setTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light);
    }
  }

  isDark() {
    return this.theme() === Theme.Dark || (this.theme() === Theme.System && this.systemDarkMode.matches);
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme.set(parseInt(savedTheme));
    }
    this.updateTheme();
  }

  private updateTheme() {
    const html = document.documentElement;
    if (this.isDark()) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
