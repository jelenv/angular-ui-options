import { Component } from '@angular/core';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { LucideComponent } from './lucide/lucide.component';
import { NgIconComponent } from './ng-icon/ng-icon.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styles: ``,
  imports: [
    HlmCardContentDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    NgIconComponent,
    LucideComponent,
  ],
})
export class IconsComponent {}
