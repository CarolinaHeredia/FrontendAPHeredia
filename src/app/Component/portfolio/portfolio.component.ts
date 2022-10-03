import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService:TokenService,private router:Router) { }

  isLogged=false;

  ngOnInit(): void {
    
    this.isLogged=this.tokenService.isLogged();  
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
   
  
  }

  login(){
    
    this.router.navigate(['/Secciones','Login']);
  }




}
