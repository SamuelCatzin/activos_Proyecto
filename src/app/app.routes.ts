import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PropiedadComponent } from './pages/propiedad/propiedad.component';
import { PropietariosComponent } from './pages/propietarios/propietarios.component';
import { AgregarPropiedadComponent } from './pages/agregar-propiedad/agregar-propiedad.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { PersonalComponent } from './pages/personal/personal.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'propiedad', component: PropiedadComponent },
  { path: 'propietarios', component: PropietariosComponent },
  { path: 'agregar-propiedad', component: AgregarPropiedadComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'personal', component: PersonalComponent },
];