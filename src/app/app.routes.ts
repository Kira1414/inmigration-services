import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page';
import { ServicesPageComponent } from './pages/services-page/services-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Soluciones Migratorias NYC | Expertos en Visas y Green Card'
  },
  {
    path: 'servicios',
    component: ServicesPageComponent,
    title: 'Servicios | Soluciones Migratorias NYC'
  }
];
