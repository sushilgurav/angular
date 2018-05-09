import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <input type="checkbox" (change)="box1($event)">Check1<br>
  <input type="checkbox" (change)="box2($event)">Check2<br>
  <input type="checkbox" (change)="box3($event)">Check3<br>
  <br><br>
  {{val}}
  {{val1}}
  {{val2}}
  
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent1 {
  title = 'app';
  val:string;
  val1:string;
  val2:string;

  box1(e){
    if(e.target.checked==true)
    {
      this.val="KLE";
    }
    else
    {
      this.val="";
    }

  }
  box2(e){
    if(e.target.checked==true)
    {
      this.val1="Technological";
    }
    else
    {
      this.val1="";
    }

  }
  box3(e){
    if(e.target.checked==true)
    {
      this.val2="University";
    }
    else
    {
      this.val2="";
    }

  }
}
