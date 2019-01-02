import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
private n : number=100;
private dt : any = new Date();
private base : number = 2;
private powd : number = 5;
  constructor() { }

  ngOnInit() {
  }

}
