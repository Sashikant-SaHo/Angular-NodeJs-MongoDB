import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
 n : number=100;
 dt : any = new Date();
 base : number = 2;
 powd : number = 5;
  constructor() { }

  ngOnInit() {
  }

}
