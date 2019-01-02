import { CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";


export class ChildGuard implements CanActivateChild{
    
    canActivateChild() : Promise<boolean> | Observable<boolean> | boolean{
return false;
    }


}