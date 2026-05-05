import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
export class LandingPageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Asesoria Migratoria en NYC | Visas F1, B2, Green Card y Ciudadania');
    this.meta.updateTag({
      name: 'description',
      content:
        'Asesoria migratoria en New York para visas F1, B2, cambio de estatus, extension de visa, Green Card, permiso de trabajo, ciudadania e ITIN.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Asesoria Migratoria en NYC | Visas F1, B2, Green Card y Ciudadania'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Orientacion profesional para visas F1, B2, cambio de estatus, Green Card, permisos de trabajo, ciudadania e ITIN en New York.'
    });
  }
}
