import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  public flowers: any[] = [
    { name: 'lily', cost: 1500, color: 'white', img: './assets/images/lily.jpg' },
    { name: 'rose', cost: 1800, color: 'yellow', img: './assets/images/rose.jpg' }
  ]
  public flowerdata: any;
  constructor() { }
  ngOnInit() {
  }
  collectFlowerInfo(flower: any) {
    this.flowerdata = flower;

  }

}
