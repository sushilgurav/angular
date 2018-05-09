import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 FirstNumber <input type = "number"   [(ngModel)] = 'a'>
 SecondNumber <input type = "number"   [(ngModel)] = 'b'>
 <p *ngIf = "a<b"> 
 minimum  is {{a}}</p>
 <p *ngIf = "b<a"> 
 minimum  is {{b}}</p>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent1 {
  title = 'app';
  a:number=1;
  b:number=9;

}
