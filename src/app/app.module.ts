import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark } from 'ng-bootstrap-icons/icons';
import { interceptorProvider } from './Service/interceptor';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { ErrorComponent } from './Component/error/error.component';
import { HeaderComponent } from './Component/header/header.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { AcercaDeComponent } from './Component/acerca-de/acerca-de.component';
import { PersonaEditComponent } from './Component/persona-edit/persona-edit.component';
import { EducacionNewComponent } from './Component/educacion-new/educacion-new.component';
import { EducacionEditComponent } from './Component/educacion-edit/educacion-edit.component';
import { EducacionComponent } from './Component/educacion/educacion.component';
import { ExperienciaNewComponent } from './Component/experiencia-new/experiencia-new.component';
import { ExperienciaEditComponent } from './Component/experiencia-edit/experiencia-edit.component';
import { ExperienciaComponent } from './Component/experiencia/experiencia.component';
import { ProyectosNewComponent } from './Component/proyectos-new/proyectos-new.component';
import { ProyectosEditComponent } from './Component/proyectos-edit/proyectos-edit.component';
import { ProyectosComponent } from './Component/proyectos/proyectos.component';
import { SkillsNewComponent } from './Component/skills-new/skills-new.component';
import { SkillsEditComponent } from './Component/skills-edit/skills-edit.component';
import { SkillsComponent } from './Component/skills/skills.component';
import { FooterComponent } from './Component/footer/footer.component';
import { StoreService } from './Service/store.service';
import { TokenService } from './Service/token.service';
import { SeccionesModule } from './Modulo/secciones/secciones.module';
import { SeccionesgRoutingModule } from './Modulo/secciones/secciones-routing-routing.module';









const icons = {
  Alarm,
  App,
  Bookmark
};

@NgModule({
  declarations: [
    AppComponent,

    
    PortfolioComponent,
    IniciarSesionComponent,
    ErrorComponent,

    AcercaDeComponent,

    PersonaEditComponent,

    EducacionNewComponent,
    EducacionEditComponent,
    EducacionComponent,

    ExperienciaNewComponent,
    ExperienciaEditComponent,
    ExperienciaComponent,

    ProyectosNewComponent,
    ProyectosEditComponent,
    ProyectosComponent,

    SkillsNewComponent,
    SkillsEditComponent,
    SkillsComponent,

    FooterComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    BootstrapIconsModule.pick(icons),
    SeccionesgRoutingModule,
    AppRoutingModule,
    SeccionesModule
  ],
  exports: [
    BootstrapIconsModule,
  ],
  providers:[
    interceptorProvider,
    TokenService,
    StoreService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
