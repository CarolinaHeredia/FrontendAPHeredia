import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaM';
import { TokenService } from 'src/app/Service/token.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { trigger, style, transition, animate, state,keyframes } from '@angular/animations'
import Swal from 'sweetalert2';
import { from, reduce } from 'rxjs';
import { __importDefault } from 'tslib';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
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



export class AcercaDeComponent implements OnInit {
  
  @Input()
  shadowHeaderActive=false;
  
  @Input()
  shadowAboutmeActive=false;


  miPortfolio: Persona = new Persona("", "", "", "", "", "", "");
  isLogged = true;
  value:number=0;
  constructor(private datosPortfolio: PortfolioService, private tokenService: TokenService, private router: Router) { }


  

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(Datos => {
      this.miPortfolio = Datos;
    });

    this.isLogged = this.tokenService.isLogged();
  }



  newSeccion() {
    Swal.fire({
      icon: 'error',
      title: 'Seccion no funciona',
      text: 'Se trabajara pronto!',
    })
  }

}
