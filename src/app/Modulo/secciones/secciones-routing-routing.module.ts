import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from 'src/app/Component/acerca-de/acerca-de.component';
import { EducacionEditComponent } from 'src/app/Component/educacion-edit/educacion-edit.component';
import { EducacionComponent } from 'src/app/Component/educacion/educacion.component';
import { ErrorComponent } from 'src/app/Component/error/error.component';
import { ExperienciaEditComponent } from 'src/app/Component/experiencia-edit/experiencia-edit.component';
import { ExperienciaComponent } from 'src/app/Component/experiencia/experiencia.component';
import { PersonaEditComponent } from 'src/app/Component/persona-edit/persona-edit.component';
import { PortfolioComponent } from 'src/app/Component/portfolio/portfolio.component';
import { ProyectosEditComponent } from 'src/app/Component/proyectos-edit/proyectos-edit.component';
import { ProyectosComponent } from 'src/app/Component/proyectos/proyectos.component';
import { SkillsEditComponent } from 'src/app/Component/skills-edit/skills-edit.component';
import { SkillsComponent } from 'src/app/Component/skills/skills.component';
import { GuardChildGuard } from 'src/app/Servicios/guard-child.guard';
import { Guard } from 'src/app/Servicios/guard.guard';
import { SeccionesComponent } from './secciones.component';

const routes: Routes = [
  { path: 'Secciones',component:SeccionesComponent,  children:[
  { path: 'Portfolio', component: PortfolioComponent},
  { path: 'AcercaDeMi', component: AcercaDeComponent },
  { path: 'Experiencia', component: ExperienciaComponent},
  { path: 'ExperienciaEdit/:id', component: ExperienciaEditComponent,canActivate:[Guard] },
  { path: 'Educacion', component: EducacionComponent },
  { path: 'EducacionEdit/:id', component: EducacionEditComponent,canActivate:[Guard]   },
  { path: 'Proyecto', component: ProyectosComponent },
  { path: 'ProyectoEdit/:id', component: ProyectosEditComponent ,canActivate:[Guard]  },
  { path: 'Skills', component: SkillsComponent },
  { path: 'SkillsEdit/:id', component: SkillsEditComponent,canActivate:[Guard]   },
  { path: 'PerfilEdit/:id', component: PersonaEditComponent,canActivate:[Guard] },
 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesgRoutingModule { }
