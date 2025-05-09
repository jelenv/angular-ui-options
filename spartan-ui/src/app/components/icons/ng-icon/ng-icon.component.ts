import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideActivity, lucideAlarmClockCheck, lucideArchive } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-ng-icon',
  imports: [HlmIconDirective, NgIcon],
  providers: [provideIcons({ lucideActivity, lucideAlarmClockCheck, lucideArchive })],
  template: `
    <ng-icon hlm name="lucideAlarmClockCheck" size="20px" />
    <ng-icon hlm name="lucideArchive" size="base" />
    <ng-icon hlm name="lucideActivity" size="xl" />
  `,
  styles: ``,
})
export class NgIconComponent {}
