import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './Component/acerca-de/acerca-de.component';
import { EducacionEditComponent } from './Component/educacion-edit/educacion-edit.component';
import { EducacionComponent } from './Component/educacion/educacion.component';
import { ErrorComponent } from './Component/error/error.component';
import { ExperienciaEditComponent } from './Component/experiencia-edit/experiencia-edit.component';
import { ExperienciaComponent } from './Component/experiencia/experiencia.component';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { PersonaEditComponent } from './Component/persona-edit/persona-edit.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { ProyectosEditComponent } from './Component/proyectos-edit/proyectos-edit.component';
import { ProyectosComponent } from './Component/proyectos/proyectos.component';
import { SkillsEditComponent } from './Component/skills-edit/skills-edit.component';
import { SkillsComponent } from './Component/skills/skills.component';
import { SeccionesComponent } from './Modulo/secciones/secciones.component';
import { GuardChildGuard } from './Servicios/guard-child.guard';
import { GuardGuard } from './Servicios/guard.guard';



const routes: Routes = [

  { path: 'Secciones', component: SeccionesComponent},
  { path: 'Login', component: IniciarSesionComponent,canActivate:[GuardGuard]},
  { path: 'Error', component: ErrorComponent},
  { path: '', redirectTo: 'Secciones/Portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: 'Error', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
