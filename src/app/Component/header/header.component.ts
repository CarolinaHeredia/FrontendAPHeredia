import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Persona } from 'src/app/Modelos/personaM';
import { StoreService } from 'src/app/Service/store.service';
import { TokenService } from 'src/app/Service/token.service';
import { PortfolioService } from 'src/app/Servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged=false;
  miPortfolio:any;
 

  constructor(private tokenService:TokenService,private storeService:StoreService,private router:Router,private personaService:PortfolioService ) { }

  ngOnInit(): void { 
      this.isLogged=this.tokenService.isLogged();
      this.miPortfolio = this.personaService.obtenerDatos();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
    this.storeService.setHeaderActive(true);
  
  }

  login(){
    this.storeService.setHeaderActive(false);
  
    this.router.navigate(['/','Login']);
    
  }

}
