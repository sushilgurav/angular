import { Injectable } from "@angular/core";

@Injectable()
export class mathComponent
{
   add(a,b)
   {
       alert(" add called1");
       return(a+b);
   }
   subt(a,b)
   {
       alert(" subt called1");
       return(a-b);
   }
}