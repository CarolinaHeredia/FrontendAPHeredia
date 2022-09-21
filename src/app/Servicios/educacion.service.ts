import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../Modelos/educacionM';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private httpClient:HttpClient) { 
  }

  url=environment.urlBackendEducacion;

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  obtenerDatos():Observable<any>{
    return this.httpClient.get<Educacion>(this.url +'traer');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
  } 

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create',educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
