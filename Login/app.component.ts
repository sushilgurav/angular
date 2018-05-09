import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <input type = "text" value="Username" placeholder = "Username" [(ngModel)] = 'a'>
  <input type = "text" value = "Password" placeholder = "Password" [(ngModel)] = 'b'>
  <input type = "button" value = "click" (click) = "check()">
  {{msg}}
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  a:string;
  b:string;
  msg:string;
  aa:any[];
  i:number;

  constructor()
  {
    this.aa=[{Username:"wel",Password:"come"},{Username:"hi",Password:"hello"},{Username:"BVB",Password:"Hubli"},{Username:"madhu",Password:"madhura"}];
     
  }

  check()
  {
     for(this.i=0;this.i<4;this.i++)
     {
       if(this.aa[this.i].Username == this.a && this.aa[this.i].Password == this.b)
       {
         this.msg = "Valid msg";
         break;
       }
       else
        this.msg = "Invalid msg";
     }
  }
}
