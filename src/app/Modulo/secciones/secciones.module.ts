import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionesComponent } from '../secciones/secciones.component';
import { SeccionesgRoutingModule } from './secciones-routing-routing.module';
import { HeaderComponent } from 'src/app/Component/header/header.component';



@NgModule({
  declarations: [
    SeccionesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SeccionesgRoutingModule
  ],
  exports:[
    SeccionesComponent
  ]
})
export class SeccionesModule { }
