import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templateform1',
  templateUrl: './templateform1.component.html',
  styleUrls: ['./templateform1.component.css']
})
export class Templateform1Component implements OnInit {
@ViewChild('f') frm;
  constructor() { }

  ngOnInit() {
  }

  register(){
console.log('the form value is ',this.frm.value);
  }


  clear(){
    this.frm.reset();
  }

}
