import { Component } from '@angular/core';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
   <br>
   <h2>Beverages</h2>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price<br>   
coke  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="coke($event)">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg}}<br>
sprite  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="sprite($event)">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg2}}<br>
mirinda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="mirinda($event)">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg3}}<br>
pepsi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="pepsi($event)">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg4}}<br>

 
 <br>
Final Bill Amount&nbsp;&nbsp;&nbsp;&nbsp;{{fbill}} &nbsp;&nbsp;&nbsp;<input type="button" value="Bill" (click)="bill()">
 
 
 <br><br><br>Search Item &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" [(ngModel)]="value">&nbsp;&nbsp;&nbsp;<input type="button" value="Search" (click)="searchitem()"> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{message2}} 
 
 `,
  styleUrls: ['./app.component.css']

})
export class AppComponent2{
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
    this.aa=[{drinks:"coke"},{drinks:"sprite"},{drinks:"mirinda"},{drinks:"pepsi"}];
     
  }

coke(e)
{
  if(e.target.checked==true)
{
  this.msg=15;
}
  else
{
  this.msg=0;
}
}

sprite(e)
{
  if(e.target.checked==true)
{
  this.msg2=18;
}
  else
{
  this.msg2=0;
}
}
mirinda(e)
{
  if(e.target.checked==true)
{
  this.msg3=12;
}
  else
{
  this.msg3=0;
}
}
pepsi(e)
{
  if(e.target.checked==true)
{
  this.msg4=14;
}
  else
{
  this.msg4=0;
}
}

bill()
{

  this.fbill=this.msg+this.msg2+this.msg3+this.msg4;
}
searchitem()
{
  for(this.i=0;this.i<4;this.i++)
  {
    if(this.aa[this.i].drinks == this.value)
    {
      this.message2 = "Item Present";
      break;
    }
    else
     this.message2 = "Item Not Found!!!";
  }
}
}
