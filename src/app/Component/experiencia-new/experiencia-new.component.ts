import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experienciaM';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { JsonService } from 'src/app/Servicios/json.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Windows } from 'ng-bootstrap-icons/icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {


  miExperiencia: Experiencia[];
  newExperienciaActive=true;
  editExperienciaActve = true;
  formNewExperiencia: FormGroup;

  @Output()
  actualizar:EventEmitter<boolean> = new EventEmitter<boolean>();



  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router) {
    this.formNewExperiencia = this.formBuilder.group({

      company: ['', [Validators.required, Validators.minLength(4)]],
      position: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      img_url: ['', [Validators.required, Validators.minLength(4)]],
      mode: ['', [Validators.required, Validators.minLength(4)]],
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]],
      timeElapsed: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {

  }

  onCreate() {
    const expe = new Experiencia(this.company?.value, this.position?.value, this.description?.value, this.img_url?.value, this.mode?.value, this.start?.value, this.end?.value, this.timeElapsed?.value);
    this.experienciaService.save(expe).subscribe(
      data => {
         this.actualizar.emit(this.newExperienciaActive);
         Swal.fire(
          'Experiencia Creada!',
          'Experiencia creada con Exito!',
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


  get company() {
    return this.formNewExperiencia.get('company');
  }
  get position() {
    return this.formNewExperiencia.get('position');
  }
  get description() {
    return this.formNewExperiencia.get('description');
  }
  get img_url() {
    return this.formNewExperiencia.get('img_url');
  }
  get mode() {
    return this.formNewExperiencia.get('mode');
  }
  get start() {
    return this.formNewExperiencia.get('start');
  }
  get end() {
    return this.formNewExperiencia.get('end');
  }
  get timeElapsed() {
    return this.formNewExperiencia.get('timeElapsed');
  }


}
