import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css'
})
export class ServicesSectionComponent {
  protected readonly cards = {
    featured: {
      icon: 'swap_horiz',
      title: 'Cambio de status (B2/F1 - F1/F2)',
      description: 'Analisis de elegibilidad, preparacion documental y acompanamiento para transiciones de estatus como estudiante, dependiente o visitante sin salir del pais.',
      bullets: ['Revision de Formularios I-539', 'Organizacion de evidencia', 'Asesoria institucional']
    },
    highlight: {
      icon: 'fact_check',
      title: 'Procesos familiares documentados',
      description: 'Acompanamiento migratorio cuando existe una relacion o situacion familiar real y documentable, con enfoque en requisitos, formularios y evidencia para el proceso de visado.'
    },
    standard: [
      {
        icon: 'history',
        title: 'Extension de Visa B2',
        description: 'Preparacion responsable para solicitar mas tiempo de estadia temporal en EE.UU. segun su situacion y evidencia.'
      },
      {
        icon: 'badge',
        title: 'Renovacion de Green Card',
        description: 'Guia para renovar su residencia permanente, revisar fechas clave y evitar interrupciones innecesarias.'
      },
      {
        icon: 'work',
        title: 'Permiso de Trabajo',
        description: 'Revision de requisitos y preparacion para solicitudes de autorizacion de empleo cuando corresponda.'
      }
    ],
    wide: [
      {
        icon: 'public',
        title: 'Ciudadania Americana',
        description: 'Preparacion para el proceso de naturalizacion, examen civico y entrevista con enfoque claro y ordenado.'
      },
      {
        icon: 'payments',
        title: 'ITIN & Taxes',
        description: 'Orientacion para numero de identificacion fiscal y declaracion de impuestos federales con criterio responsable.'
      },
      {
        icon: 'airport_shuttle',
        title: 'Transporte privado y empresarial',
        description: 'Traslados ejecutivos desde aeropuertos de New York hacia Manhattan para viajeros, familias y equipos corporativos con reserva previa.'
      }
    ]
  };
}
