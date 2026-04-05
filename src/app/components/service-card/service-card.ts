import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-card.html'
})
export class ServiceCardComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly variant = input<'featured' | 'highlight' | 'standard' | 'wide'>('standard');
  readonly bullets = input<string[]>([]);
  readonly linkLabel = input<string>('');
  readonly linkHref = input<string>('');
}
