import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../Modelos/experienciaM';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private httpClient:HttpClient) { 
  }


 
 //url = environment.urlBackendExperiencia;
 url:String="https://backendapheredia.herokuapp.com/experiencia/";

  public lista():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  obtenerDatos():Observable<any>{
    return this.httpClient.get<Experiencia>(this.url +'traer');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create',experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

}
