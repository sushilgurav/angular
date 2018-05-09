import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent5 } from './app.component5';



@NgModule({
  declarations: [
    AppComponent5,
   
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent5]
})
export class AppModule { }
