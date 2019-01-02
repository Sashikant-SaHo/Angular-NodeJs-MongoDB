import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
public msgFromChild : string;
  constructor() { }

  ngOnInit() {
  }

  gotMessage(data){
this.msgFromChild = data;
  }

}
