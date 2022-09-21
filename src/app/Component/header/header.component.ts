import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StoreService } from 'src/app/Service/store.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged=false;
  
 

  constructor(private tokenService:TokenService,private storeService:StoreService,private router:Router) { }

  ngOnInit(): void { 
      this.isLogged=this.tokenService.isLogged();
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
