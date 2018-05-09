import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
   
  <h1>  the value is {{title}} and sum is {{c}}</h1>
  <p class="a">number is {{ans}}</p>
 first number <input type="number" [(ngModel)]="a">
 sec number <input type="number" [(ngModel)]="b">
 ans number <input type="number" [(ngModel)]="c">
 answer<input type="number" value={{a+b}}>
{{a+b}}
<div *ngIf="check()"> greater is {{a}}</div>
<div *ngIf="a<b"> greater is {{b}}</div>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent3 {
  title = 'app works!';
  a:number;
  b:number;
  c:number;
  ans:string;
  constructor()
  {
      this.a=0;
      this.b=0;


  }
  check()
  {
      this.c=this.a+this.b;
  }
}