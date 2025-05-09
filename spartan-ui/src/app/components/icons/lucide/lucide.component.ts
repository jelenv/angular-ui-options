import { Component } from '@angular/core';
import { ActivityIcon, AlarmClockCheck, ArchiveIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-lucide',
  imports: [LucideAngularModule],
  template: `
    <i-lucide [img]="AlarmIcon" size="20px"></i-lucide>
    <i-lucide [img]="ArchiveIcon" size="24px"></i-lucide>
    <i-lucide [img]="ActivityIcon" size="48px"></i-lucide>
  `,
  styles: ``,
})
export class LucideComponent {
  readonly AlarmIcon = AlarmClockCheck;
  readonly ArchiveIcon = ArchiveIcon;
  readonly ActivityIcon = ActivityIcon;
}
