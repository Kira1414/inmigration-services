import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner';
import { ServiceCardComponent } from '../../components/service-card/service-card';
import { FooterSectionComponent } from '../../sections/footer-section/footer-section';
import { TopNavComponent } from '../../sections/top-nav/top-nav';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, TopNavComponent, ServiceCardComponent, CtaBannerComponent, FooterSectionComponent],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css'
})
export class ServicesPageComponent {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Servicios Migratorios en NYC | Visa F1, B2, Green Card e ITIN');
    this.meta.updateTag({
      name: 'description',
      content:
        'Servicios migratorios en New York: cambio de estatus B2 a F1, extensión de visa B2, ajuste por matrimonio, Green Card, permiso de trabajo, ciudadanía e ITIN.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Servicios Migratorios en NYC | Visa F1, B2, Green Card e ITIN'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Conozca opciones para visa F1, visa B2, cambio de estatus, residencia, permisos de trabajo, ciudadanía e ITIN en New York.'
    });
  }

  protected readonly services = [
    {
      icon: 'swap_horiz',
      title: 'Cambio de estatus B2 a F1',
      description: 'Estrategia y preparación documental para cambio de estatus de visa B2 a visa F1, F1/F2 y otros escenarios compatibles ante USCIS.',
      bullets: ['Evaluación de elegibilidad', 'Formulario I-539', 'Evidencia y seguimiento USCIS']
    },
    {
      icon: 'favorite',
      title: 'Ajuste por matrimonio',
      description: 'Acompañamiento para residencia por matrimonio con enfoque en consistencia documental y preparación de evidencia.',
      bullets: ['Formularios familiares', 'Paquete de evidencia', 'Preparación para entrevista']
    },
    {
      icon: 'history',
      title: 'Extensión de visa B2',
      description: 'Solicitud de extensión de visa B2 para visitantes que necesitan más tiempo de estadía legal por razones personales, familiares o de viaje.',
      bullets: ['Análisis de tiempos', 'Carta de soporte', 'Control de vencimientos']
    },
    {
      icon: 'badge',
      title: 'Renovación de Green Card',
      description: 'Renovación o reemplazo de residencia permanente con gestión documental y revisión de requisitos vigentes.',
      bullets: ['Formulario I-90', 'Revisión de historial', 'Seguimiento de biometría']
    },
    {
      icon: 'work',
      title: 'Permiso de trabajo',
      description: 'Gestión de autorización laboral inicial o renovación según el tipo de caso migratorio.',
      bullets: ['Formulario I-765', 'Alineación con su caso base', 'Seguimiento de tiempos']
    },
    {
      icon: 'public',
      title: 'Ciudadanía americana',
      description: 'Preparación de naturalización con revisión de elegibilidad, historial y acompañamiento general del proceso.',
      bullets: ['Formulario N-400', 'Apoyo para examen cívico', 'Preparación de entrevista']
    }
  ];
}
