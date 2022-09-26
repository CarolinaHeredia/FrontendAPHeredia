import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Modelos/skillsM';
import { SkillsService } from 'src/app/Servicios/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  miSkills:Skills[];
  Skills: Skills;

  constructor(private skillsService: SkillsService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(data => {
      this.Skills = data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo cargar aptitud vuelva a intentarlo!',
      })
    })
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => { this.miSkills = data; })
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.skillsService.update(this.Skills.id, this.Skills).subscribe(
      data => {
        this.cargarSkills();
        Swal.fire(
          'Aptitud Actualizado!',
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
