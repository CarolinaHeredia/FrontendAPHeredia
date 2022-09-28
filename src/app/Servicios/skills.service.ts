import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Modelos/skillsM';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

 
  constructor(private httpClient:HttpClient) { 
  }


//url=environment.urlBackendSkills;
url:String='https://backendapheredia.herokuapp.com/skills/';

  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.url + 'lista');
  }

  obtenerDatos():Observable<any>{
    return this.httpClient.get<Skills>(this.url +'traer');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<Skills>(this.url + `detail/${id}`);
  } 

  public save(skills: Skills): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create',skills);
  }

  public update(id: number, skills:Skills): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
