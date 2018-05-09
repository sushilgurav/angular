import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from  '@angular/http';
import {AppComponent1} from './app.component1';
import {AppComponent2} from './app.component2';
import {AppComponent3} from './app.component3';
import {AppComponent4}  from './app.component4';

//import {Injectable} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,AppComponent1,AppComponent2,AppComponent3,AppComponent4
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],

  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule {}
