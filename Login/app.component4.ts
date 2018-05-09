import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type = "number" placeholder = "Number1" [(ngModel)] ='a'>
  <input type = "number" placeholder = "Number2" [(ngModel)] = 'b'>
  <input type = "button" value = "Add" (click) = "disp()">
  <h1> answer<input type="number" [(ngModel)] ='c'> </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent4 {
  title = 'app';
  a:number;
  b:number;
  c:number;

  disp()
  {
    this.c=this.a+this.b;
  }
}
