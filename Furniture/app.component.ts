import { Component } from '@angular/core';
import { appRouterModule } from "./app.route1";
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent1 } from './app.Clothing';
@Component({
  selector: 'app-root',
  template: `
  <h1>   {{title1}} </h1>
     <div> 
            
            <a  [routerLink]="['/Clothing']">Clothing</a>
            <a  [routerLink]="['/Furniture']">Furniture</a>
            <a  [routerLink]="['/Kidzone']">Kidzone</a>
         
        </div>
     

      
    

    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'SHOPPING MART';
}
