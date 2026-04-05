import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-banner.html'
})
export class CtaBannerComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly phoneLabel = input<string>('Llamenos Directo');
  readonly phoneNumber = input<string>('+1 347 370 0823');
  readonly buttonLabel = input.required<string>();
  readonly buttonLink = input.required<string>();
}
