import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
public user : any = {};
  constructor(public http : Http,public paramService : ActivatedRoute) { }

  ngOnInit() {
    this.paramService.params.subscribe((param)=>{
      console.log(param['id'])
      this.http.get('https://reqres.in/api/users/'+param['id']).subscribe(
        (res)=>{
console.log(res.json().data)
this.user = res.json().data;
        },
        (err)=>{
          console.log('The error is ',err);
        }
      )
    })
  }

}
