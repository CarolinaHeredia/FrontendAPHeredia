import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/Modelos/educacionM';
import { TokenService } from 'src/app/Service/token.service';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  animations: [
    trigger('resaltar', [
      state('void', style({
        transform: ('translateX(-100%)'),
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
export class EducacionComponent implements OnInit {

  miEducacion: Educacion[];
  Educacion: Educacion;
  isLogged = false;
  newEducacionActive = false;
  editEducacionActive = false;

  @Input()
  shadowEducacionActive = false;

  @Output() CEducacionEvent:EventEmitter<number>;
  CEducacion:number = 0;

  constructor(private educacionService: EducacionService, private tokenService: TokenService, private router: Router) { 
  this.CEducacionEvent = new EventEmitter();
  }

  ngOnInit(): void {
    this.cargarEducacion();
    this.isLogged = this.tokenService.isLogged();
  }

  nuevaEducacionActive(): void {
    this.newEducacionActive = !this.newEducacionActive;
  }

  HijoEducacionActive(cambiar: boolean): void {
    if (cambiar) {
      this.newEducacionActive = !this.newEducacionActive;
      this.cargarEducacion();
    } else { }
  }

  editarExperienciaActive() {
    this.editEducacionActive = !this.editEducacionActive;
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {
      this.miEducacion = data;
      this.CEducacion=data.length;
      this.CEducacionEvent.emit(this.CEducacion)
    })

   
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
          this.educacionService.delete(id).subscribe(
            data => {
              this.cargarEducacion();
              Swal.fire(
                'Eliminado!',
                'Tu archivo fue eliminado correctamente.',
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
  dropEducacion(event: CdkDragDrop<any>) {
    moveItemInArray(this.miEducacion, event.previousIndex, event.currentIndex);
  }

}

