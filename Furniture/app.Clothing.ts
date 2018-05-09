import { Component } from '@angular/core';
import { cloths } from './clothstype';
import { Details } from './details';
@Component({
  selector: 'app-root',
  template: `
  <h1>   {{title}} </h1>
   <li><a  [routerLink]="['/formals']">Formal's</a>,      \n <a  [routerLink]="['/Casuals']">Casual's</a></li>
  
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent1 {
  title = 'Clothing zone';
  
  
 
  constructor() { }
 
 
  
    

  
}