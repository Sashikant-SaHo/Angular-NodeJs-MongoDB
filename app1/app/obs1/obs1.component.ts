import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css']
})
export class Obs1Component implements OnInit {

  constructor() { }

  ngOnInit() {

    // this.getData(2, 5).subscribe(
    //   (res) => {
    //     console.log('The result is ', res)
    //   },
    //   (err) => {
    //     console.log('The error is ', err)
    //   }
    // )

    this.getSData().subscribe(
        (res) => {
          console.log('The result is ', res)
        },
        (err) => {
          console.log('The error is ', err)
        },
        ()=>{
          console.log('Observable completed')
        }
      )

  }


  getSData(){

    return new Observable((observer)=>{

setTimeout(()=>{
observer.next(1000)
},1000)


setTimeout(()=>{
  observer.next(2000)
  },2000)
setTimeout(()=>{
    observer.complete()
    },1000)

  // setTimeout(()=>{
  //   observer.error("Some error come")
  //   },3000)
 setTimeout(()=>{
      observer.next(4000)
      },4000)
})
  }
  getData(a, b) {
    var c = 0;
    return new Observable((observer) => {

      setTimeout(() => {
        c = a + b;
        observer.next(c)
      }, 3000)


    });
  }

}
