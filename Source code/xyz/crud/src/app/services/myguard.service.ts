import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class MyGuard implements CanActivate{
constructor(public router : Router){
}
canActivate() : Promise<boolean> | Observable<boolean> | boolean{
if(localStorage.getItem('stt')){
    return true;
}
else{
    this.router.navigate(['/']);
    return false;
}
}
}