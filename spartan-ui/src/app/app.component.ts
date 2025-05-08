import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HlmInputDirective, HlmLabelDirective],
})
export class AppComponent {
  title = 'spartan-ui';
}
