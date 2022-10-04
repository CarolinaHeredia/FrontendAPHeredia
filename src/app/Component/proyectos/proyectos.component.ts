import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelos/proyectoM';
import { TokenService } from 'src/app/Service/token.service';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    trigger('Entrar', [
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
export class ProyectosComponent implements OnInit {

  @Input()
  shadowProyectoActive=false;

  miProyecto: Proyecto[];
  isLogged = false;
  newProyectoActive = false;
  editProyectoActive = false;
  

  constructor(private proyectoService: ProyectosService, private tokenService: TokenService, private router: Router) { }


  ngOnInit(): void {
    this.cargarProyecto();
    this.isLogged=this.tokenService.isLogged();
  }

  nuevoProyectoActve(): void {
    this.newProyectoActive = !this.newProyectoActive;
  }

  editarProyectoActve() {
    this.editProyectoActive = !this.editProyectoActive;
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.miProyecto = data; })
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
          this.proyectoService.delete(id).subscribe(
            data => {
              this.cargarProyecto();
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

  HijoProyectoActive(cambiar:boolean): void {
    if(cambiar){
    this.newProyectoActive = !this.newProyectoActive;
    this.cargarProyecto();
    }else{}
  }

  irA(url:string){
    this.router.navigateByUrl('${url}');
  }

  dropProyecto(event: CdkDragDrop<any>) {
    console.log(event);
    moveItemInArray(this.miProyecto, event.previousIndex, event.currentIndex);
  }

}

