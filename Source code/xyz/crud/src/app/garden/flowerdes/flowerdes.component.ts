import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flowerdes',
  templateUrl: './flowerdes.component.html',
  styleUrls: ['./flowerdes.component.css']
})
export class FlowerdesComponent implements OnInit {
@Input() flowerdata;
  constructor() { }

  ngOnInit() {
  }

}
