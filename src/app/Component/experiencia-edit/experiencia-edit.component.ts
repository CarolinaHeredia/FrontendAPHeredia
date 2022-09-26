import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experienciaM';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})

export class ExperienciaEditComponent implements OnInit {

  miExperiencia:Experiencia[];
  Experiencia:Experiencia;

  constructor(private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(data => {
      this.Experiencia = data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar vuelva a intentarlo!',
      })
    })
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => { this.miExperiencia = data; })
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.experienciaService.update(this.Experiencia.id, this.Experiencia).subscribe(
      data => {
        this.cargarExperiencia();
        Swal.fire(
          'Experiencia Actualizada!',
          'Experiencia modificada con Exito!',
          'success'
        )
        this.router.navigate(['/Secciones','Portfolio'])
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar Experiencia!',
        })
      }
    )
  }
}
