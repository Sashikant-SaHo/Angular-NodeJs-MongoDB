import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamicform1',
  templateUrl: './dynamicform1.component.html',
  styleUrls: ['./dynamicform1.component.css']
})
export class Dynamicform1Component implements OnInit {
private frm : FormGroup;  
  constructor(private fb : FormBuilder) { }

  ngOnInit() {

   this.frm =  this.fb.group({
      first_name : [null,[Validators.required,Validators.minLength(2)]],
      department : [null,[Validators.required]],
      patients : this.fb.array([this.createpatientForm()])
    })

  }

  delPatientForm(index){
    var controls = this.frm.get('patients') as FormArray;
    controls.removeAt(index);
  }

  addPatient(){
    var controls = this.frm.get('patients') as FormArray;
    
    controls.push(this.createpatientForm())
    
  }
  

  createpatientForm(){
    return this.fb.group({
      patient_name : [null,[Validators.required]],
      patient_disease : [null,[Validators.required]]
    })
  }


}
