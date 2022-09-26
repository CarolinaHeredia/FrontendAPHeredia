import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/educacionM';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {

  miEducacion: Educacion[];
  Educacion: Educacion;

  constructor(private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(data => {
      this.Educacion = data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar vuelva a intentarlo!',
      })
    })
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => { this.miEducacion = data; })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(this.Educacion.id, this.Educacion).subscribe(
      data => {
        this.cargarEducacion();
        Swal.fire(
          'Educacion Actualizada!',
          'modificada con Exito!',
          'success'
        )
        this.router.navigate(['/Secciones','Portfolio']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar Educacion!',
        })
      }
    )
  }
}
