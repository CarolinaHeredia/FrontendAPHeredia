import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Persona } from '../Modelos/personaM';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private httpClient:HttpClient) { 
  }

   url= environment.urlBackendPersona;

  public lista():Observable<Persona[]>{

    return this.httpClient.get<Persona[]>(this.url + 'lista');

  }

  obtenerDatos():Observable<any>{

    return this.httpClient.get<any>(this.url +'traer/perfil');

  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<any>(this.url + `detail/${id}`);
  } 

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }

  public update(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, persona);
  }

  /*
   public updateAboutMe(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}/${AboutMe}`); }

   public updateUrlImg(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}/${persona.url_img}`); }

     public updateUrlBackimg(id: number, persona:Persona): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}/${persona.url_Backimg}`); }
   */
  

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
