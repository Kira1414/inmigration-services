import { Component } from '@angular/core';
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
  protected readonly services = [
    {
      icon: 'swap_horiz',
      title: 'Cambio de status',
      description: 'Estrategia y preparacion documental para cambios B2/F1, F1/F2 y otros escenarios compatibles.',
      bullets: ['Evaluacion de elegibilidad', 'Recoleccion documental', 'Presentacion y seguimiento USCIS']
    },
    {
      icon: 'favorite',
      title: 'Ajuste por matrimonio',
      description: 'Acompanamiento para residencia por matrimonio con enfoque en consistencia documental y preparacion de evidencia.',
      bullets: ['Formularios familiares', 'Paquete de evidencia', 'Preparacion para entrevista']
    },
    {
      icon: 'history',
      title: 'Extension de visa B2',
      description: 'Solicitud de extension para mantener estancia legal mientras se resuelven necesidades personales o familiares.',
      bullets: ['Analisis de tiempos', 'Redaccion de soporte', 'Control de vencimientos']
    },
    {
      icon: 'badge',
      title: 'Renovacion de Green Card',
      description: 'Renovacion o reemplazo de residencia permanente con gestion documental y revision de requisitos vigentes.',
      bullets: ['Formulario I-90', 'Revision de historial', 'Seguimiento de biometria']
    },
    {
      icon: 'work',
      title: 'Permiso de trabajo',
      description: 'Gestion de autorizacion laboral inicial o renovacion segun el tipo de caso migratorio.',
      bullets: ['Formulario I-765', 'Alineacion con su caso base', 'Seguimiento de tiempos']
    },
    {
      icon: 'public',
      title: 'Ciudadania americana',
      description: 'Preparacion de naturalizacion con revision de elegibilidad, historial y acompanamiento general del proceso.',
      bullets: ['Formulario N-400', 'Apoyo para examen civico', 'Preparacion de entrevista']
    }
  ];
}
