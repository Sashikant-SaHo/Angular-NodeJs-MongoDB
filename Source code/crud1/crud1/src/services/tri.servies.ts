

import{Injectable} from "@angular/core"
import { peri } from "./perimeter.services";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";


@Injectable()
export class TriServices{
 constructor(private peri2 : peri ){}

 area(a,b,c){
    var s= this.peri2.semi(a,b,c)
     return s*(s-a)*(s-b)*(s-c);
 }

}

