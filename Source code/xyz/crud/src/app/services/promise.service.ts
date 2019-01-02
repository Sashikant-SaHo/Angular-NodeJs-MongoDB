
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class PromiseService {

constructor(public http  : Http){

}


getRecord(){
    return new Observable((observer)=>{
setTimeout(function(){
observer.next(100)
},1000)

setTimeout(function(){
    observer.next(300)
    },2000)

    setTimeout(function(){
        observer.next(700)
        },4000)

        
    setTimeout(function(){
        observer.complete();
        },10000)


    })


}


getUsers(){

return this.http.get("https://reqres.in/api/users?page=2");

}


    add(a, b) {
        var c = 0;
        return new Promise((resolve,reject)=>{
        setTimeout(function () {
            c = a + b;
            resolve(c)
        }, 10000)
        
    })
    }


}