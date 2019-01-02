import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class SocketService{
private socket = io("http://localhost:3000");
constructor(){

}

sendMessage(msg){
    console.log('Message from component ',msg)
    this.socket.emit('message',{message : msg});
}

serverReply(){
    return new Observable((observer)=>{
this.socket.on('reply',(data)=>{
observer.next(data)
})
    })
}


}