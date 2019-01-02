

export class TriangleService{

area(a,b,c){
var s = (a+b+c)/2.0;
return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

}