import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Skills } from 'src/app/Modelos/skillsM';
import Swal from 'sweetalert2';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
export class SkillsComponent implements OnInit {

  miSkills: Skills[];
  Skills: Skills;

  isLogged = false;
  newSkillsActive = false;
  editSkillsActive = false;

  constructor(private skillsService: SkillsService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarSkills();
    this.isLogged=this.tokenService.isLogged();
  }

  nuevoSkillsActve(): void {
    this.newSkillsActive = !this.newSkillsActive;
   
  }

  editarSkillsActve() {
    this.editSkillsActive = !this.editSkillsActive;
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => { this.miSkills = data; })
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
          this.skillsService.delete(id).subscribe(
            data => {
              this.cargarSkills();
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


  onUpdate(id?: number): void {
    this.skillsService.update(id, this.Skills).subscribe(
      data => {
        Swal.fire(
          'Ediatada!',
          'Tu aptitud fue actualizada correctamente.',
          'success'
        )
        this.cargarSkills();

      }, err => {
        Swal.fire(
          'ERROR!',
          'Tu archivo no se pudo editar.',
          'error'
        )
      
      }
    )
  }

  HijoSkillsActive(cambiar:boolean): void {
    if(cambiar){
    this.newSkillsActive = !this.newSkillsActive;
    this.cargarSkills();
    }else{}
  }


  dropSkills(event: CdkDragDrop<any>) {
    console.log(event);
    moveItemInArray(this.miSkills, event.previousIndex, event.currentIndex);
  }


}

