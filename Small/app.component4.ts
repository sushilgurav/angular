import { Component } from '@angular/core';


@Component({
 selector: 'app-root',
template:`
<h1>First <input type="number" [(ngModel)]="F1"></h1>
<h1>Second <input type="number" [(ngModel)]="F2"></h1>
<input type="button" value="add" (click)="disp()">
<input type="button" value="Subtract" (click)="disp2()">

<h1>Answer<input type="number" [(ngModel)]="F3"></h1>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent4 {
    F1:number;
    F2:number;
    F3:number;
    F4:number;
    
    
    disp()
    {
        this.F3=this.F1+this.F2;
    }
    disp2()
    {
        this.F3=this.F1-this.F2;
    }
    
}
    