import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent1 } from './app.comp1';
import { AppComponent2 } from './app.comp2';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
const routes:Routes = [
	{ path: 'comp1', component: AppComponent1 },
	{ path: 'comp2', component:AppComponent2  } 
];



export const appRouterModule = RouterModule.forRoot(routes);
