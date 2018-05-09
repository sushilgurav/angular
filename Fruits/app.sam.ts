import { Component } from '@angular/core';
import {mathComponent  } from './app.maths';
@Component({
  selector: 'app-root',
  template: `
   <br>
   <h2>Vegetable</h2>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price<br>   
onion  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="check($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg}}<br> 
carrot&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="check2($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg2}}<br>
radish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="radish($event)">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg3}}<br>
pumpkin&nbsp;&nbsp;&nbsp; &nbsp;<input type="checkbox" (change)="pumpkin($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg4}}<br>
cauliflower&nbsp;<input type="checkbox" (change)="clf($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg5}}<br>
beans&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <input type="checkbox" (change)="beans($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg6}}<br>

 
 <br>
Final Bill Amount&nbsp;&nbsp;&nbsp;&nbsp;{{fbill}} &nbsp;&nbsp;&nbsp;<input type="button" value="Bill" (click)="bill()">
 
 
 <br><br><br>Search Item &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" [(ngModel)]="value">&nbsp;&nbsp;&nbsp;<input type="button" value="Search" (click)="searchitem()"> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{message2}} 
 
 `,
  styleUrls: ['./app.component.css']

})
export class AppSam{
  title = 'app';
  msg:number=0;
  msg2:number=0;
  msg3:number=0;
  msg4:number=0;
  msg5:number=0;
  msg6:number=0;
  message2:string;
  value:string;
  i:number;
  aa:any[];
  
  fbill:number=0;
  
  constructor()
  {
    this.aa=[{vegetable:"onion"},{vegetable:"carrot"},{vegetable:"radish"},{vegetable:"pumpkin"},{vegetable:"cauliflower"},{vegetable:"beans"}];
     
  }

check(e)
{
  if(e.target.checked==true)
{
  this.msg=20;
}
  else
{
  this.msg=0;
}
}

check2(e)
{
  if(e.target.checked==true)
{
  this.msg2=60;
}
  else
{
  this.msg2=0;
}
}
radish(e)
{
  if(e.target.checked==true)
{
  this.msg3=35;
}
  else
{
  this.msg3=0;
}
}
pumpkin(e)
{
  if(e.target.checked==true)
{
  this.msg4=52;
}
  else
{
  this.msg4=0;
}
}
clf(e)
{
  if(e.target.checked==true)
{
  this.msg5=26;
}
  else
{
  this.msg5=0;
}
}
beans(e)
{
  if(e.target.checked==true)
{
  this.msg6=40;
}
  else
{
  this.msg6=0;
}
}
bill()
{

  this.fbill=this.msg+this.msg2+this.msg3+this.msg4+this.msg5+this.msg6;
}
searchitem()
{
  for(this.i=0;this.i<6;this.i++)
  {
    if(this.aa[this.i].vegetable == this.value)
    {
      this.message2 = "Item Present";
      break;
    }
    else
     this.message2 = "Item Not Found!!!";
  }
}
}
