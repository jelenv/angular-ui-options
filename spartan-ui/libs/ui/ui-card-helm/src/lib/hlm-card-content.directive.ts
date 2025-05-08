import { computed, Directive, input } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import { hlm } from '@spartan-ng/brain/core';

export const cardContentVariants = cva('p-6 pt-0 pb-3', {
  variants: {},
  defaultVariants: {},
});
export type CardContentVariants = VariantProps<typeof cardContentVariants>;

@Directive({
  selector: '[hlmCardContent]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmCardContentDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() => hlm(cardContentVariants(), this.userClass()));
}
