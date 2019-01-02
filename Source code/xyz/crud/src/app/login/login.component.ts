import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user : any = {};
  constructor(public router : Router) { }

  ngOnInit() {
  }

  checkLogin(){
    if(this.user.email=="mohan@gmail.com" && this.user.password=="123456"){
     localStorage.setItem('stt','1');
     this.router.navigate(['/home'])
    }
    else{
      console.log("Incorrect login")
    }
  }

}
