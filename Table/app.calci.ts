import { Component ,Inject } from '@angular/core';
import {mathComponent  } from './app.maths';



@Component({
  selector: 'app-root',
  template: `
  <input type="number" placeholder = "Number1" [(ngModel)]="a">
 <input type="number"  placeholder = "Number2"[(ngModel)]="b">
 <input type="number"  placeholder = "Answer" [(ngModel)]="c">
 <input type="button" value="add" (click)="addnum()">
 <input type="button" value="sub" (click)="subtnum()">
  `,
  styleUrls: ['./app.component.css']

})
export class calciComponent1 {
  title = 'app works!';
  a:number;
  b:number;
  c:number;
  
  constructor(private math1:mathComponent)
  {
      
   
  }
  addnum()
  {
     alert("add called");

     this.c=this.math1.add(this.a,this.b);
  }
  subtnum()
  {
     alert("subt called"); 
     this.c=this.math1.subt(this.a,this.b);
  }

}