import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class StoreService {

  headerActive:boolean;

  private EnviarheaderActiveSubject$ = new Subject <boolean>();
  EnviarheaderActiveObservable$ = this.EnviarheaderActiveSubject$.asObservable();

  setHeaderActive(set:boolean){ 
    this.headerActive=set;
    this.EnviarheaderActiveSubject$.next(set);
  } 

}
 