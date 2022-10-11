import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Modelos/educacionM';
import { TokenService } from 'src/app/Service/token.service';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { ProyectosService } from 'src/app/Servicios/proyectos.service';
import { SkillsService } from 'src/app/Servicios/skills.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router, private educacionService: EducacionService, private experienciaService: ExperienciaService
    , private proyectoService: ProyectosService, private skillsService: SkillsService) { }


  isLogged = false;
  value: number = 0;

  shadowHeaderActive = false;
  shadowAboutmeActive = false;
  shadowEducacionActive = false;
  shadowExperienciaActive = false;
  shadowProyectoActive = false;
  shadowSkillsActive = false;

  CEducacion: number = 1;
  CExperiencia: number = 1;
  CProyecto: number = 1;
  CSkills: number = 1;

  LAboutme = 50;   //dimensiones notebbok  titulo 90 + espacios 400 + 800 dimensiones de cada modelo
  LEducacion =500 +371 * this.CEducacion;
  LExperiencia = 500+800 * this.CExperiencia;
  LProyecto = 500+800 * this.CProyecto;
  LSkills =500 +800 * this.CSkills;


  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();

    if (this.isLogged) {  //dimension en notebook
      this.LAboutme = this.LAboutme;
      this.LEducacion = this.CEducacion +800;
      this.LExperiencia=this.CExperiencia +1000;
      this.LProyecto =this.CProyecto +1200;
      this.LSkills =this.CSkills+1200;
    }


  }





  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/Secciones', 'Login']);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {

    this.value = e.target['scrollingElement'].scrollTop;
    console.log(this.value);

    if (1 < this.value && this.value < 300) {
      this.shadowHeaderActive = true;
      this.shadowAboutmeActive = false;
    } else if ((300 < this.value) && (this.value < (600 + this.LAboutme))) { //About me
      this.shadowHeaderActive = false;
      this.shadowAboutmeActive = true;
      this.shadowEducacionActive = false;
    } else if (((600 + this.LAboutme) < this.value) && (this.value < (700 + this.LEducacion))) { //Educacion
      this.shadowAboutmeActive = false;
      this.shadowEducacionActive = true;
      this.shadowExperienciaActive = false;
    } else if (((700 + this.LEducacion) < this.value) && (this.value < (1400 + this.LExperiencia))) { //Experiencia
      this.shadowEducacionActive = false;
      this.shadowExperienciaActive = true;
      this.shadowProyectoActive = false;
    }
    else if (((1400 + this.LExperiencia) < this.value) && (this.value < (1900 + this.LProyecto))) { //Proyecto
      this.shadowExperienciaActive = false;
      this.shadowProyectoActive = true;
      this.shadowSkillsActive = false;
    }
    else if (((1900 + this.LProyecto) < this.value) && (this.value < (2600 + this.LSkills))) { //Skills
      this.shadowProyectoActive = false;
      this.shadowSkillsActive = true;
    }
    else {
      this.shadowHeaderActive = false;
      this.shadowAboutmeActive = false;
      this.shadowEducacionActive = false;
      this.shadowExperienciaActive = false;
      this.shadowProyectoActive = false;
      this.shadowSkillsActive = false
    }
  }




}
