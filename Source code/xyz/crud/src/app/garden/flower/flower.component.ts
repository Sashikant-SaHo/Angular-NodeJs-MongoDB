import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
@Input() info ;
@Output() getFlowerData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendInfo(){
this.getFlowerData.emit(this.info)
  }

}
