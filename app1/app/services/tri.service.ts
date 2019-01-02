import { Injectable } from "@angular/core";
import { PeriService } from "./peri.service";


@Injectable()
export class TriService{

constructor(private peri : PeriService){

}

area(a,b,c){
var s = this.peri.semi(a,b,c);
return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

}