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
      description: 'Transicion estrategica entre categorias de visa para extender su permanencia legal como estudiante o dependiente sin salir del pais.',
      bullets: ['Gestion de Formularios I-539', 'Asesoria Institucional']
    },
    highlight: {
      icon: 'favorite',
      title: 'Ajuste por Matrimonio',
      description: 'Obtenga su Green Card a traves de la union legal con un ciudadano o residente permanente.'
    },
    standard: [
      {
        icon: 'history',
        title: 'Extension de Visa B2',
        description: 'Mas tiempo para sus proyectos personales o turisticos en EE.UU.'
      },
      {
        icon: 'badge',
        title: 'Renovacion de Green Card',
        description: 'Mantenimiento de su estatus legal permanente sin interrupciones.'
      },
      {
        icon: 'work',
        title: 'Permiso de Trabajo',
        description: 'Autorizacion legal para incorporarse al mercado laboral estadounidense.'
      }
    ],
    wide: [
      {
        icon: 'public',
        title: 'Ciudadania Americana',
        description: 'Preparacion para el examen y acompanamiento en el proceso de naturalizacion.'
      },
      {
        icon: 'payments',
        title: 'ITIN & Taxes',
        description: 'Gestion de numero de identificacion fiscal y declaracion de impuestos federales.'
      }
    ]
  };
}
