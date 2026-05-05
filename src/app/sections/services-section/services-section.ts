import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card';

type AirportKey = 'jfk' | 'lga' | 'newark';

interface TransportAirport {
  readonly key: AirportKey;
  readonly name: string;
  readonly description: string;
}

interface TransportVehicle {
  readonly type: string;
  readonly reference: string;
  readonly image: string;
  readonly icon: string;
  readonly prices: Record<AirportKey, string>;
}

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
        description: 'Preparacion para el proceso de naturalizacion, examen civico y entrevista con enfoque claro y ordenado.',
        bullets: []
      },
      {
        icon: 'payments',
        title: 'ITIN & Taxes',
        description: 'Orientacion para numero de identificacion fiscal y declaracion de impuestos federales con criterio responsable.',
        bullets: []
      },
      {
        icon: 'airport_shuttle',
        title: 'Transporte privado y empresarial',
        description: 'Servicio VIP 24/7 para traslados entre aeropuertos, Manhattan y New York. Vehiculos limpios, conductores profesionales y reserva anticipada con respaldo de Mytrip Car Services Corp.',
        bullets: ['JFK desde $80', 'LaGuardia desde $75', 'Newark desde $85']
      }
    ]
  };

  protected readonly transport = {
    airports: [
      { key: 'jfk', name: 'JFK', description: 'John F. Kennedy' },
      { key: 'lga', name: 'LGA', description: 'LaGuardia' },
      { key: 'newark', name: 'Newark', description: 'Newark, NJ' }
    ] satisfies readonly TransportAirport[],
    vehicles: [
      {
        type: 'Sedan',
        reference: 'Audi A3 o similar',
        image: '/transport/sedan.png',
        icon: 'directions_car',
        prices: { jfk: '$80', lga: '$75', newark: '$85' }
      },
      {
        type: 'Minivan',
        reference: 'Toyota Sienna o similar',
        image: '/transport/minivan.png',
        icon: 'airport_shuttle',
        prices: { jfk: '$90', lga: '$85', newark: '$95' }
      },
      {
        type: 'SUV',
        reference: 'Cadillac Escalade o similar',
        image: '/transport/suv.png',
        icon: 'directions_car_filled',
        prices: { jfk: '$100', lga: '$90', newark: '$110' }
      }
    ] satisfies readonly TransportVehicle[]
  };
}
