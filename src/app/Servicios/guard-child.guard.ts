import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../Service/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardChildGuard implements CanActivateChild {

  constructor(private tokenService:TokenService,private router:Router){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.tokenService.getToken()) {
        return  true;
      } else {
        this.router.navigate(['/Login'])
      }
      return  false;
  }
  
}
