import { Component } from '@angular/core';
import { StoreService } from './Service/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  
  headerActive:boolean;

  constructor(private storeService: StoreService) { }
  ngOnInit(): void {
      this.storeService.EnviarheaderActiveObservable$.subscribe(headerActive => {
      this.headerActive = headerActive;
    });



  }
}
