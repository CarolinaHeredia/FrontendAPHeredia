import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../Service/auth.service';
import { TokenService } from '../Service/token.service';


@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  constructor(private authService:AuthService, private router:Router,private tokenService:TokenService){}
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
    if (this.tokenService.isLogged()) {
      return  true;
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Stop',
        text: 'Usted no esta autorizado para acceder a esta pagina INICIE SESION!',
      })
       this.router.navigate(['/','Login']);
    return  false;
    }
}
}