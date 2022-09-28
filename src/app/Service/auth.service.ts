import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { JwtDto } from '../Modelos/jwt-dto';
import { LoginUsuario } from '../Modelos/login-usuario';
import { NuevoUsuario } from '../Modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 
 //authURL=environment.urlBackendAuth;
 authURL:String='https://backendapheredia.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

 
  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }


}
