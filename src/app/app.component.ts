import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public data$: any;

  constructor() {}

  

  receiveMessage($event: any) {
    this.data$ = $event;
  }
  
}
