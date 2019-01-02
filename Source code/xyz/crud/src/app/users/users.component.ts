import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users : any[]=[];
  constructor(public http : Http) { }

  ngOnInit() {

    this.http.get("https://reqres.in/api/users?page=2").subscribe(
      (res)=>{
console.log(res.json().data)
this.users = res.json().data;
      }
    )

  }

}
