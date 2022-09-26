import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/proyectoM';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos-edit.component.html',
  styleUrls: ['./proyectos-edit.component.css']
})
export class ProyectosEditComponent implements OnInit {
  miProyecto: Proyecto[];
  Proyecto:Proyecto;

  constructor(private proyectoService: ProyectosService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data => {
      this.Proyecto = data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar Proyecto vuelva a intentarlo!',
      })
    })
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.miProyecto = data; })
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.proyectoService.update(this.Proyecto.id, this.Proyecto).subscribe(
      data => {
        this.cargarProyecto();
        Swal.fire(
          'Proyecto Actualizado!',
          'modificada con Exito!',
          'success'
        )
        this.router.navigate(['Secciones','Portfolio']);
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar Aptitud!',
        })
      }
    )
  }
}
