import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent1 } from './app.fruits';
import { AppComponent2 } from './app.comp2';
import { AppSam } from './app.sam';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
const routes:Routes = [
	{ path: 'comp2', component: AppComponent1 },
	{ path: 'sam', component: AppSam },
	{ path: 'comp1', component:AppComponent2  } 
];



export const appRouterModule = RouterModule.forRoot(routes);
