import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() info : string;
  constructor() { }

  ngOnInit() {
    console.log('Inside the child component '+this.info)
  }

}
