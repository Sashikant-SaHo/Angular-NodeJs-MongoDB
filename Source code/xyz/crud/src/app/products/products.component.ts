import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
public productlist : any[] =[
{name : 'Apple Basket',cost : 900,img : './assets/images/apple.jpg'},
{name : 'Pineapple Basket',cost : 700,img : './assets/images/pine.jpg'},
{name : 'Orange Basket',cost : 400,img : './assets/images/orange.jpg'}

];
  constructor() { }

  ngOnInit() {
  }

}
