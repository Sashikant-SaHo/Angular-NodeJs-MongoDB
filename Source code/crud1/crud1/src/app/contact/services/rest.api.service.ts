import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class restApiService{

constructor(private HttpClient : HttpClient){}

get(url){
return this.HttpClient.get(url).toPromise();
}

post(url,data){
return this.HttpClient.post(url,data).toPromise();
}

delete(url){
    return this.HttpClient.delete(url).toPromise();

}

put(url,data){
    return this.HttpClient.put(url,data).toPromise();

}

}