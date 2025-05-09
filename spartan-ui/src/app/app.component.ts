import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, MoonIcon, SunIcon } from 'lucide-angular';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { IconsComponent } from './components/icons/icons.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, InputsComponent, HlmButtonDirective, LucideAngularModule, IconsComponent],
  providers: [],
})
export class AppComponent {
  title = 'spartan-ui';
  readonly SunIcon = SunIcon;
  readonly MoonIcon = MoonIcon;

  themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  themeIcon() {
    return this.themeService.isDark() ? this.MoonIcon : this.SunIcon;
  }
}
