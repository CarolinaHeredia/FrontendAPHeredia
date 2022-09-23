import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { TokenService } from '../Service/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardChildGuard implements CanActivateChild {

  constructor(private tokenService:TokenService,private router:Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.tokenService.isLogged()) {
        return  true;
      } else{
        Swal.fire({
          icon: 'error',
          title: 'Stop',
          text: 'Usted no esta autorizado para acceder a esta pagina!',
        })
      return  false;
      }
  }
  
}
