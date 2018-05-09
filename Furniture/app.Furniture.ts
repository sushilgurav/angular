import { Component } from '@angular/core';
import { furnitures } from './furnituretypes';
import { Details } from './details';
@Component({
  selector: 'app-root',
  template: `
       
       <h1>   {{title}} </h1>
  <h2>Available furniture's list</h2>
<ul class="furniture">
  <li *ngFor="let details of furniture"
    [class.selected]="details === selectedfurniture"
    (click)="onSelect(details)">
    <span class="badge">{{details.prod_id}}</span> {{details.name}},
  </li>
</ul>
 
<div *ngIf="selectedfurniture">
 
  <h2>{{ selectedfurniture.name | uppercase }} Details</h2>
  <div><span>prod_id: </span>{{selectedfurniture.prod_id}}</div>
  <div>
    <label>Product price:
      <input [(ngModel)]="selectedfurniture.prod_price" placeholder="prod_price">
    </label>
  </div>
 
</div>
       
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent2 {
  title = 'Furniture`s zone';
  
  furniture = furnitures;                  /* heroes = HEROES;
 
  selectedHero: Hero;*/
 
  selectedfurniture: Details;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(furniture: Details): void {
    this.selectedfurniture = furniture;
  }
  
    

  

  
}
/*<table width="50%" border="3"> 
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
       </table>*/