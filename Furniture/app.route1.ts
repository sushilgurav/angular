import { Component } from '@angular/core';
import { RouterModule,Routes} from "@angular/router";
import { AppComponent1 } from './app.Clothing';
import { AppComponent2 } from './app.Furniture';
import { Router } from '@angular/router'; 
import { NgModule }      from '@angular/core';
import { AppComponent3 } from 'app/app.Kidzone';
import { AppComponent4 } from 'app/formals';
import { AppComponent5 } from 'app/Casuals';
const routes:Routes = [
	{ path: 'Clothing', component: AppComponent1 },
	{ path: 'Furniture', component:AppComponent2  },
	{ path: 'Kidzone', component:AppComponent3 },
	{ path: 'formals', component:AppComponent4 },
	{ path: 'Casuals', component:AppComponent5 }
];



export const appRouterModule = RouterModule.forRoot(routes);
