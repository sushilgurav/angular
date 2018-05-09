import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <input type = "text" [(ngModel)] = 'a'>
   <h1> Entered text is {{a}} </h1>
   {{b}}
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent3 {
  //title = 'app';
  a:string = "Welcome";
  b:number= 12;
}
