import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
       <table width="50%" border="3"> 
         <tr>
          <td>first number</td>
          <td><input type="number" [(ngModel)]="a"></td>
   
         </tr>
          <tr>
          <td>sec number</td>
          <td><input type="number" [(ngModel)]="b"></td>
   
         </tr>
         <tr>
          <td>answer</td>
          <td><input type="number" [(ngModel)]="c"></td>
   
         </tr>
         <tr>
          <td><input type="button" value="add" (click)="add()"></td>
          <td><input type="button" value="subt" (click)="subt()"></td>
   
         </tr>
       </table>
       <p *ngIf="a<0 || b<00">input is negative</p>
       <table width="50%" border="3">
       <tr *ngFor="let pp of studs">
         <td>{{pp.roll}}</td>
         <td>{{pp.name}}</td>
       </tr>
       </table>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent2 {
  title = 'app works!';
  a:number;
  b:number;
  c:number;
  ans:string;
  studs:any[];
  constructor()
  {
      this.a=0;
      this.b=0;
      this.c=0;
      this.studs=[{roll:200,name:"suresh"},{roll:300,name:"ravi"}];
      

  }
  add()
  {
      alert("add called");

      
      this.c=this.a+this.b;
  }
  subt()
  {

      this.c=this.a-this.b;
  }
}