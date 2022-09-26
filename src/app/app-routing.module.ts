import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './Component/error/error.component';

import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';

import { SeccionesComponent } from './Modulo/secciones/secciones.component';


const routes: Routes = [
  { path: 'Secciones', component: SeccionesComponent},
  { path: 'Login', component: IniciarSesionComponent},
  { path: 'Error', component: ErrorComponent},
  { path: '', redirectTo: 'Secciones/Portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: 'Error', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
