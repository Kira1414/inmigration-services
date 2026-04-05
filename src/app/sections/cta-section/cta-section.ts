import { Component } from '@angular/core';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CtaBannerComponent],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css'
})
export class CtaSectionComponent {}
