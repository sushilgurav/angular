import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
   <br>
   <h2>Fruits</h2>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price<br>   
apple &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="apple($event)">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{{msg}}<br>
orange &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="orange($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;{{msg2}}<br>
grapes   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" (change)="grapes($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg3}}<br>
pineapple &nbsp; &nbsp;&nbsp;<input type="checkbox" (change)="pineapple($event)">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{msg4}}<br>

 
 <br>
Final Bill Amount&nbsp;&nbsp;&nbsp;&nbsp;{{fbill}} &nbsp;&nbsp;&nbsp;<input type="button" value="Bill" (click)="bill()">
 
 
 <br><br><br>Search Item &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" [(ngModel)]="value">&nbsp;&nbsp;&nbsp;<input type="button" value="Search" (click)="searchitem()"> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{message2}} 
 
 `,
  styleUrls: ['./app.component.css']

})
export class AppComponent1{
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
    this.aa=[{fruits:"apple"},{fruits:"orange"},{fruits:"grapes"},{fruits:"pineapple"}];
     
  }

apple(e)
{
  if(e.target.checked==true)
{
  this.msg=40;
}
  else
{
  this.msg=0;
}
}

orange(e)
{
  if(e.target.checked==true)
{
  this.msg2=20;
}
  else
{
  this.msg2=0;
}
}
grapes(e)
{
  if(e.target.checked==true)
{
  this.msg3=23;
}
  else
{
  this.msg3=0;
}
}
pineapple(e)
{
  if(e.target.checked==true)
{
  this.msg4=58;
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
    if(this.aa[this.i].fruits == this.value)
    {
      this.message2 = "Item Present";
      break;
    }
    else
     this.message2 = "Item Not Found!!!";
  }
}
}
