import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactiveex1',
  templateUrl: './reactiveex1.component.html',
  styleUrls: ['./reactiveex1.component.css']
})
export class Reactiveex1Component implements OnInit {
private frm : FormGroup;
  constructor() {

this.frm = new FormGroup({
  name :  new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('')],),
  email : new FormControl(null)
})

   }

  ngOnInit() {
  }

  register(){
    console.log(this.frm.value)
  }

}
