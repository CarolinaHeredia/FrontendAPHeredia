import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaM';
import { TokenService } from 'src/app/Service/token.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';
import { trigger, style, transition, animate, state,keyframes } from '@angular/animations'
import Swal from 'sweetalert2';
import { from, reduce } from 'rxjs';

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
        animate(1000, style({
          transform: ('translateX(0)'),
          opacity: 1

        }))

      ])
    ])

    
  ]
})
export class AcercaDeComponent implements OnInit {
  miPortfolio: Persona = new Persona("", "", "", "", "", "", "");
  isLogged = true;



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
      text: 'Pronto se habilitara!',
    })
  }

}
