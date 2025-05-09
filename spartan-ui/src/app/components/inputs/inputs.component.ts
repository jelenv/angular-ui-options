import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmErrorDirective, HlmFormFieldComponent, HlmHintDirective } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styles: ``,
  imports: [
    HlmInputDirective,
    HlmLabelDirective,
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    HlmFormFieldComponent,
    HlmHintDirective,
    HlmErrorDirective,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class InputsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  filter = 'Some value';
}
