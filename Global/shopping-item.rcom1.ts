import{ vegetables} from "../item";
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Global } from "./global";

@Component({
  selector: 'app-shopping-item1',
  templateUrl: './shopping-item.rcom1.html',
  styleUrls: ['./shopping-item.component.css'],
  providers:[DataService]
})
export class ShoppingItemrcom1 implements OnInit {
  shoppingveglist:vegetables[]=[];
  selecteditem:vegetables;
  toggleform:boolean=false;
  i:number;
  sum:number=0;
  qua:number=0;
  item:String;
  flag:number=0;
  total:Number;


  constructor(private dataservice:DataService) {
    this.total=Global.test;
   }

  getitems(){
      this.dataservice.getshoppingvegs()
      .subscribe(vegetables=>{
        this.shoppingveglist=vegetables;
        console.log('data from dataservice'+ this.shoppingveglist);
      });
  }

  additem(form)
  {
    let newItem: vegetables={
      itemname:form.value.itemname,
      itemprice:form.value.itemprice,
      itembought:false,
      quantity:form.value.quantity
    }
    this.dataservice.addshoppingveg(newItem)
    .subscribe(vegetable=>{
      console.log(vegetable);
      this.getitems();
    });
   // console.log(form.value);
  }



  deleteitem(id)
  {
    this.dataservice.deleteshoppingitem(id)
    .subscribe(data=>{
      if(data.n==1){
        for(var i=0;i<this.shoppingveglist.length;i++){
          if(id==this.shoppingveglist[i]._id){
            this.shoppingveglist.splice(i,1);
          }
        }
      }
    });
  }
  
  updatevegcheckbox(item)
  {
    item.itembought=!item.itembought;
    this.dataservice.updateshoppingveg(item)
    .subscribe(res=>{
      console.log('original item to be updated with old values   '+res.itembought);
      this.getitems();
    });
  
  }

  upd(item)
  {
    item.quantity=item.quantity-1;
    item.itembought=false;
    this.dataservice.updateshoppingveg(item)
    .subscribe(res=>{
      console.log('original item to be updated with old values   '+res.itembought);
      this.getitems();
    
  });
}

bill()
{
  for(this.i=0;this.i<this.shoppingveglist.length;this.i++){
    if(this.shoppingveglist[this.i].itembought==true)
    {
        this.sum+=Number(this.shoppingveglist[this.i].itemprice);
       // this.shoppingveglist[this.i].quantity=(Number(this.shoppingveglist[this.i].quantity)-1);
      //  this.qua=this.shoppingveglist[this.i].quantity;
        this.upd(this.shoppingveglist[this.i]);
   //     this.shoppingveglist[this.i].quantity=this.shoppingveglist[this.i].quantity-1;
        Global.test=this.sum+Number(Global.test);
    }

  }
  alert(this.sum);
 // alert(this.qua);

  this.sum=0;
  this.total=Global.test;

}


search()
{
  this.item=prompt("Enter item to be searched:");
  for(this.i=0;this.i<this.shoppingveglist.length;this.i++){
    if(this.shoppingveglist[this.i].itemname==this.item)
    {
      this.flag=1;
    }
  }
  if(this.flag==1)
  {
    alert("Item found");
  }
  else if(this.flag==0)
  {
    alert("Item not found");
  }

}
 ngOnInit() {
    this.getitems();
  }

}