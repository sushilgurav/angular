import { Component } from '@angular/core';
import { appRouterModule } from "./app.route1";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent1 } from './app.fruits';
import {AppSam  } from './app.sam';

@Component({
  selector: 'app-root',
  template: `

  <h1>Super Market</h1>
     <div>    
            <a  [routerLink]="['/comp1']">Beverages</a>
            <a  [routerLink]="['/comp2']">Fruits</a>
            <a  [routerLink]="['/sam']">Vegetables
          </a>
         
        </div>
     

      
    

    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
