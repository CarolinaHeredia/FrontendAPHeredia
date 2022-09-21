import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Proyecto } from '../Modelos/proyectoM';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private httpClient:HttpClient) { 
  }

 //url:String='http://localhost:8080/proyecto/'; 

 url = environment.urlBackendProyecto;

  public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }

 obtenerDatos():Observable<any>{
    return this.httpClient.get<Proyecto>(this.url +'traer');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  } 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
