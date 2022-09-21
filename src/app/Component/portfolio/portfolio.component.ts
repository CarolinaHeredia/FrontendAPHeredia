import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService:TokenService,private storeService:StoreService,private router:Router) { }

  isLogged=false;

  ngOnInit(): void {
    this.storeService.setHeaderActive(true);
    this.isLogged=this.tokenService.isLogged();  
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
    this.storeService.setHeaderActive(true);
  
  }

  login(){
    this.storeService.setHeaderActive(false);
  
    this.router.navigate(['/Secciones','Login']);
  }




}
