import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, InputsComponent],
})
export class AppComponent {
  title = 'spartan-ui';
}
