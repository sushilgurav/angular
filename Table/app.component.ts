import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`

  <div>
  <h3>Enter first Number:</h3>
  <input type="number" [(ngModel)]='a' placeholder="Number1">
  <br>
  <br>
  <h3>Enter second Number:</h3>
  <input type="number" [(ngModel)]='b' placeholder="Number2">
  <br><br>
  <h3>Select Your Option:</h3>
  <select [(ngModel)]='s' (click)="check()">
  <option>Add</option>
  <option>Subtract</option>
  <option>Multiply</option>
  <option>Divide</option>
  </select>
  <p> Your option is {{s}}</p>  
  <h3>Result is:</h3>
  <input type="text" [(ngModel)]='c' placeholder="Result">
  <br>
  
 
  <br>
  
   </div>

  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title='app';
  a:number;
  b:number;
  c:number;
  s:string;

  check()
  {
        if(this.s=='Add')
        {
            this.c=this.a+this.b;
        }
        if(this.s=='Subtract')
        {
            this.c=this.a-this.b;
        }
        if(this.s=='Multiply')
        {
            this.c=this.a*this.b;
        }
        if(this.s=='Divide')
        {
            this.c=this.a/this.b;
        }
  }
}