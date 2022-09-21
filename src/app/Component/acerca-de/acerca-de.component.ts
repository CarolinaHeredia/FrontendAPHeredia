import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaM';
import { TokenService } from 'src/app/Service/token.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio: Persona = new Persona("","","","","","","");
  isLogged = false;

  constructor(private datosPortfolio: PortfolioService, private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(Datos => {
      this.miPortfolio = Datos;
    });

    this.isLogged=this.tokenService.isLogged();

  }

}
