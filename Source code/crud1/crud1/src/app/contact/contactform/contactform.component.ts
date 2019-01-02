import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { restApiService } from '../services/rest.api.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
private frm : FormGroup;
  constructor(private data : DataService,private restApi : restApiService) { }

  ngOnInit() {
    this.frm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required]),
      mobile : new FormControl(null,[Validators.required])
    })
  }

  async saveContact(){
var data =await this.restApi.post("https://contact-84278.firebaseio.com/contactlist.json",this.frm.value);
console.log('The final save status is ',data)
if(data){
  this.data.success("Contact saved successfully !");
  this.frm.patchValue({
    name : '',
    email : '',
    mobile : ''
  })
}
  }

}
