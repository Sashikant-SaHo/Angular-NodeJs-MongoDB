import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { Socketcomm } from '../services/socketcomm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
private selectedRoom : string;
private user : string = '';
private msgList : any[]=[];
private msg : string;
  constructor(private socketCommService : Socketcomm){
  }

  sendMessage(){
    console.log('Inside the send message')
this.socketCommService.sendMessageClient(this.user,this.msg,this.selectedRoom);
  }

  ngOnInit(){
this.socketCommService.serverNewMessage().subscribe(
  (res)=>{
console.log('The server res is ',res)
this.msgList.push(res)
  },
  (err)=>{
console.log('The eror is ',err)
  }
)
  

this.socketCommService.serverJoinRoom().subscribe(
  (res)=>{
console.log('The server res is ',res)
this.msgList.push(res)
  },
  (err)=>{
console.log('The eror is ',err)
  }
)
  }

  selectRoom(){
    console.log('Selected room is '+this.selectedRoom)
  this.socketCommService.joinRoom(this.user,this.selectedRoom);
  

}
}
