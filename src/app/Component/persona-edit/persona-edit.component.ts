import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaM';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})


export class PersonaEditComponent implements OnInit {

  miPortfolio: Persona = new Persona("","","","","","","");

  constructor(private personaService:PortfolioService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.obtenerDatos().subscribe(data => {
      this.miPortfolio= data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar Perfil vuelva a intentarlo!',
      })
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
  
    this.personaService.update(this.miPortfolio.id, this.miPortfolio).subscribe(
      data => {
        Swal.fire(
          'Perfil Actualizado!',
          'modificado con Exito!',
          'success'
        )
        this.router.navigate(['/Secciones','Portfolio'])
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo actualizar!',
        })
      }
    )
  }
}
