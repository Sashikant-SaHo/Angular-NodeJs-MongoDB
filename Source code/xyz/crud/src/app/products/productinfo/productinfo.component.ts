import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
@Input() product : any;
  constructor() { }

  ngOnInit() {
  }

}
