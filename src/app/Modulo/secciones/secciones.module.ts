import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionesComponent } from '../secciones/secciones.component';
import { SeccionesgRoutingModule } from './secciones-routing-routing.module';
import { HeaderComponent } from 'src/app/Component/header/header.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SeccionesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SeccionesgRoutingModule,
    BrowserAnimationsModule
  ],
  exports:[
    SeccionesComponent
  ]
})
export class SeccionesModule { }
