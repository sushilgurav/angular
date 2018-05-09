import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <table width="50%" border="3">
      <tr *ngFor= "let aa of nn">
            <td>{{aa}}</td>
        </tr>
        <tr *ngFor="let bb of nm">
           <td>{{bb}}</td>
           </tr>
           </table>
           <br>
           <h1> Employee details </h1>
           <div *ngFor="let cc of obj1">
           <ul>
           <li>{{cc.Id}}</li>
           <li>{{cc.name}}</li>
           </ul>
           </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent2 {
  title = 'app';
  a:number=12;
  b:number=9;
  nn:string[];
  nm:number[];
  obj1:any[];
  
  constructor()
  {
    this.nn = ["hi","hello"];
    this.nm = [123,456];
    this.obj1 = [{Id:1,name:"one"},{Id :2,name:"two"}];
  }

}


