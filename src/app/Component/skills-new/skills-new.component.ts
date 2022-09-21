import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Modelos/skillsM';
import { SkillsService } from 'src/app/Servicios/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills-new',
  templateUrl: './skills-new.component.html',
  styleUrls: ['./skills-new.component.css']
})
export class SkillsNewComponent implements OnInit {

  miSkills: any;

  newSkillsactive = true;
  formNewSkills: FormGroup;
  @Output()
  actualizar:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private skillsService: SkillsService, private formBuilder: FormBuilder, private router: Router) {
    this.formNewSkills = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(4)]],
      progress: ['', [Validators.required, Validators.minLength(4)]]

    });
  }




  ngOnInit() { }

  onCreate() {
    const ski = new Skills(this.name?.value, this.progress?.value);
    this.skillsService.save(ski).subscribe(
      data => {
        this.actualizar.emit(this.newSkillsactive);
        Swal.fire(
          'Creado con Exito!',
          'continue!',
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


  get name() {
    return this.formNewSkills.get('name');
  }
  get progress() {
    return this.formNewSkills.get('progress');
  }


}