import { Component } from '@angular/core';
import { CtaSectionComponent } from '../../sections/cta-section/cta-section';
import { FooterSectionComponent } from '../../sections/footer-section/footer-section';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section';
import { LocationSectionComponent } from '../../sections/location-section/location-section';
import { ServicesSectionComponent } from '../../sections/services-section/services-section';
import { TopNavComponent } from '../../sections/top-nav/top-nav';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    TopNavComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    CtaSectionComponent,
    LocationSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPageComponent {}
