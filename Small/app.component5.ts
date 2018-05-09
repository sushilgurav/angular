import { Component } from '@angular/core';
//import { NgModel} from '@angular/forms/src/directives/ng_model';

@Component({
selector :'app-root',
template:`
<h1> Enter username and password </h1>
<h1> Username <input type="text" [(ngModel)]="username"></h1>
<h1> Password <input type="password" [(ngModel)]="password"> </h1>
<input type="button" value="Login" (click)="disp()"/>
<h1> Status <input type="text" [(ngModel)] = "response"> </h1>
<h1> {{response}} </h1>
`,
styleUrls:['./app.component.css']
})

export class AppComponent5{
    username:string;
    password:string;
    x:any[]
    F3:string;
    i:number;
    F4:'Girish';
    F5:'Password';
    response:string;
  //  F4="Girish"

    

    constructor()
    {
        this.x=[{username1:"girish",password1:'asd'},
        {username1:"ganesh",password1:'asd'},
        {username1:"ganesh1`",password1:'asd'},
        {username1:"girih1`",password1:'asd'}]
    }

    disp()
    {

        for (this.i=0;this.i<4;this.i++)
        {
            if(this.username==this.x[this.i].username1 && this.password==this.x[this.i].password1)
                {
                    this.response="Valid login";
                    break;
                }
                else
                {
                    this.response='invalid login';
                    break;
                }
        }
    }
}


