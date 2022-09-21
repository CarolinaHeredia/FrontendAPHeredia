import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/proyectoM';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos-new',
  templateUrl: './proyectos-new.component.html',
  styleUrls: ['./proyectos-new.component.css']
})
export class ProyectosNewComponent implements OnInit {

  miEducacion: any;


  editProyectoActive = false;
  newProyectoActive = true;
  formNewProyecto: FormGroup;

  @Output()
  actualizar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private proyectoService: ProyectosService, private formBuilder: FormBuilder, private router: Router) {
    this.formNewProyecto = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      buildingDate: ['', [Validators.required, Validators.minLength(4)]],
      link: ['', [Validators.required, Validators.minLength(4)]],
      url_img: ['', [Validators.required, Validators.minLength(4)]]


    });
  }




  ngOnInit() {

  }

  onCreate() {
    const pro = new Proyecto(this.name?.value, this.description?.value, this.buildingDate?.value, this.link?.value, this.url_img?.value);
    this.proyectoService.save(pro).subscribe(
      data => {
        this.actualizar.emit(this.newProyectoActive);
        Swal.fire(
          'Proyecto Actualizado!',
          'modificada con Exito!',
          'success'
        )
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo Añadir!',
        })
      }
    )
  }


  get name() {
    return this.formNewProyecto.get('name');
  }
  get description() {
    return this.formNewProyecto.get('description');
  }
  get buildingDate() {
    return this.formNewProyecto.get('buildingDate');
  }
  get link() {
    return this.formNewProyecto.get('link');
  }
  get url_img() {
    return this.formNewProyecto.get('url_img');
  }

}
