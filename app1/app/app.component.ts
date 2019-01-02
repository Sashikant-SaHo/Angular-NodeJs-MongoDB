import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './services/calculator.service';
import { TriangleService } from './services/triangle.service';
import { TriService } from './services/tri.service';
import { PromiseService } from './services/promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
private users : any[] =[];
  constructor(private promiseService: PromiseService, private calc: CalculatorService, private tri: TriangleService, private tr: TriService) {

  }

  ngOnInit() {

//     this.promiseService.getRecord().subscribe(
// (res)=>{
// console.log('The data is ',res)
// },
// (err)=>{
// console.log('The errior is ',err)
// },
// ()=>{
  
// console.log('Nothing emit')
// }
//     );

//     this.promiseService.getUsers().subscribe(
//       (res)=>{
//         this.users = res.json().data;
//       }
//     )









    // var result = this.promiseService.add(2, 5).then(function (res) {
    //   console.log('The response is ', res)
    // })
    //   .catch(function (err) {
    //     console.log('The error is ', err)
    //   })
    // console.log('The sum is ' + result)
    // var sum = this.calc.add(2,5);
    // var ar = this.tri.area(2,3,2);
    // var ar = this.tr.area(2,3,2);
    // console.log('The area is ',ar)
  }

}
