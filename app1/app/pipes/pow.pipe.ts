import { PipeTransform, Pipe } from "@angular/core";


@Pipe({name : 'pow'})
export class PowPipe implements PipeTransform{

transform(t1,t2){
var p = 1;
for(var i=1;i<=t2;i++){
    p=p*t1;
}
return p;
}

}