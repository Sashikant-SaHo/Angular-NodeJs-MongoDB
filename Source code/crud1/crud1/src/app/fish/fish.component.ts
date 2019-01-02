import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  private fish_name: string;
  private fish_length: string;
  private fish_color: string;
  // private fish_cost: string;
  private fish_pic: string;

  private fish: any[] = [
    { fish_name: 'Mild', fish_length: 10, fish_color: 'red', fish_pic: 'https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjfsO7fgIrdAhUFpo8KHb0_DTMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffish%2F&psig=AOvVaw3IWNSzUoWkpiT9JP6sJngs&ust=1535348429872318' },
    { fish_name: 'pexels', fish_length: 15, fish_color: 'blue', fish_pic: 'https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwimg8mLgYrdAhWHPI8KHXI6BdMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffish%2F&psig=AOvVaw3IWNSzUoWkpiT9JP6sJngs&ust=1535348429872318' }
  ]
  savefish() {
    console.log(this.fish_name + " " + this.fish_length + " " + this.fish_color + " " );
    
    var raw = {
      name: this.fish_name,
      length: this.fish_length,
      color: this.fish_color,
      pic: this.fish_pic
    }
    this.fish.push(raw)
    this.clear();

  }
  clear() {
    this.fish_name = '';
    this.fish_length = '';
    this.fish_color = '';
    //this.fish_cost = '';
    this.fish_pic = '';
  }
  deletefish(index) {
    this.fish.splice(index, 1);

  }
  editfish(fish) {
    this.fish_name = fish.name;
    this.fish_length = fish.length;
    this.fish_color = fish.color;
   // this.fish_cost = fish.cost;

  }
  constructor() { }

  ngOnInit() {
  }

}
