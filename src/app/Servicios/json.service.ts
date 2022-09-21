import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { Observable} from 'rxjs'; //4-importamos los observables; futuros eventos a los que nos suscribimos

@Injectable({
  providedIn: 'root'
})
export class JsonService {


  constructor(private http:HttpClient) { }

//modificacion la primera parte para prueba local
    obtenerDatos():Observable<any>{
     console.log("el servicio esta corriendo correctamente");
     return this.http.get('./assets/data/Datos.json');
    }
}