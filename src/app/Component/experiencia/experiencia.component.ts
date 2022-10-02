import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Modelos/experienciaM';
import { TokenService } from 'src/app/Service/token.service';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { JsonService } from 'src/app/Servicios/json.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  animations: [
    trigger('Entrar', [
      state('void', style({
        transform: ('translateX(100%)'),
        opacity: 0
      })),
      transition(':enter', [
        animate(500, style({
          transform: ('translateX(0)'),
          opacity: 1

        }))

      ])
    ])

    
  ]
})
export class ExperienciaComponent implements OnInit {

  miExperiencia: Experiencia[];
  

  isLogged = false;
  newExperienciaActive = false;
  editExperienciaActive = false;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.isLogged=this.tokenService.isLogged();
  }

  nuevaExperienciaActve(): void {
    this.newExperienciaActive = !this.newExperienciaActive;
  }

  editarExperienciaActve() {
    this.editExperienciaActive = !this.editExperienciaActive;
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => { this.miExperiencia = data; })
  }

  delete(id?: number) {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podras revertir la accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        if (id != undefined) {
          this.experienciaService.delete(id).subscribe(
            data => {
               this.cargarExperiencia();
              Swal.fire(
                'Eliminado!',
                'Tu Experiencia fue eliminada correctamente.',
                'success'
              )
            }, err => {
              Swal.fire(
                'ERROR!',
                'Tu archivo no se pudo eliminar.',
                'error'
              )
            }
          )
        }
      }
    })
  }

  HijoExperienciaActive(cambiar:boolean): void {
    if(cambiar){
    this.newExperienciaActive = !this.newExperienciaActive;
    this.cargarExperiencia();
    }else{}
  }


  dropExperiencia(event: CdkDragDrop<any>) {
    console.log(event);
    moveItemInArray(this.miExperiencia, event.previousIndex, event.currentIndex);
  }

}

