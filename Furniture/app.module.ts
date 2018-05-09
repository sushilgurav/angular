import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AppComponent1 } from './app.Clothing';
import { AppComponent2 } from './app.Furniture';
import { AppComponent3 } from './app.Kidzone';
import { AppComponent4 } from './formals';
import { AppComponent5 } from './Casuals';
import { appRouterModule } from "./app.route1";
//import { HighlightDirective } from './app.directive';
import { dirdispComponent1 } from './app.derectivedisp';
//import { httpComponent } from './app.http';
import {mathComponent  } from './app.maths';
//import {calciComponent1  } from './app.calci';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,AppComponent1,AppComponent2,AppComponent3,AppComponent4,AppComponent5, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
   
  ],

  providers: [mathComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
