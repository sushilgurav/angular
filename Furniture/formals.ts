import { Component } from '@angular/core';
import { cloths } from './clothstype';
import { Details } from './details';
@Component({
  selector: 'app-root',
  template: `
  
  <h2>formal's</h2>
<ul class="cloth">
  <li *ngFor="let details of cloth"
    [class.selected]="details === selectedcloth"
    (click)="onSelect(details)">
    <span class="badge">{{details.prod_id}}</span> {{details.name}},
  </li>
</ul>
 
<div *ngIf="selectedcloth">
 
  <h2>{{ selectedcloth.name | uppercase }} Details</h2>
  <div><span>prod_id: </span>{{selectedcloth.prod_id}}</div>
  <div>
    <label>Product price:
      <input [(ngModel)]="selectedcloth.prod_price" placeholder="prod_price">
    </label>
  </div>
 
</div>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent4{
  title = 'Formals zone';
  
  cloth = cloths;                  /* heroes = HEROES;
 
  selectedHero: Hero;*/
 
  selectedcloth: Details;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(cloth: Details): void {
    this.selectedcloth = cloth;
  }
  
    

  
}