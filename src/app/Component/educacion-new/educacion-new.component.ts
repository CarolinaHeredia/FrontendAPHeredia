import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/educacionM';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-new',
  templateUrl: './educacion-new.component.html',
  styleUrls: ['./educacion-new.component.css']
})

export class EducacionNewComponent implements OnInit {

  miEducacion: Educacion[];
  editEducacionActve = false;
  formNewEducacion: FormGroup;
  newEducacionActive:boolean =true;


  @Output()
  actualizar:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router) {
    this.formNewEducacion = this.formBuilder.group({

      school: ['', [Validators.required, Validators.minLength(4)]],
      title: ['', [Validators.required, Validators.minLength(4)]],
      url_img: ['', [Validators.required, Validators.minLength(4)]],
      score: ['', [Validators.required, Validators.minLength(4)]],
      start: ['', [Validators.required, Validators.minLength(4)]],
      end: ['', [Validators.required, Validators.minLength(4)]]

    });
  }

  ngOnInit() { }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => { this.miEducacion = data; })
  }

  onCreate() {
    const edu = new Educacion(this.school?.value, this.title?.value, this.url_img?.value, this.score?.value, this.start?.value, this.end?.value);

    this.educacionService.save(edu).subscribe(
      data => {
        
        this.actualizar.emit(this.newEducacionActive)
        Swal.fire(
          'Educacion Creada!',
          'Educacion creada con Exito!',
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


  get school() {
    return this.formNewEducacion.get('school');
  }
  get title() {
    return this.formNewEducacion.get('title');
  }
  get url_img() {
    return this.formNewEducacion.get('url_img');
  }
  get score() {
    return this.formNewEducacion.get('score');
  }
  get start() {
    return this.formNewEducacion.get('start');
  }
  get end() {
    return this.formNewEducacion.get('end');
  }
}
