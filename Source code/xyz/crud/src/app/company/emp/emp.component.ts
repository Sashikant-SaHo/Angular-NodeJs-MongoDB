import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
@Output() getmsg = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireMessage(){
this.getmsg.emit("Hello Parent Company");
  }

}
