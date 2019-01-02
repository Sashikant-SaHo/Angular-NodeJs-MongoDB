import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public emp_name: string;
  public emp_age: string;
  public emp_sal: string;
  public btn_stt: boolean = true;
  public emps: any[] = [
    { name: 'Mohan', age: 21, sal: 100, pic: 'https://cdn.shopify.com/s/files/1/0484/0009/products/GoldFish1_a4d26490-bb27-4d53-aa45-a916c91376a1.jpg?v=1497355766' },
    { name: 'Sohan', age: 22, sal: 98, pic: '' }
  ];
  constructor() { }

  ngOnInit() {
  }
  saveEmployee() {
    console.log(this.emp_name + "-" + this.emp_age + "-" + this.emp_sal)
    var raw = {
      name: this.emp_name,
      age: this.emp_age,
      sal: this.emp_sal
    }
    this.emps.push(raw);
    this.clear();
  }

  editEmployee(emp) {
    this.btn_stt = false;
    this.emp_name = emp.name;
    this.emp_age = emp.age;
    this.emp_sal = emp.sal;
  }

  clear() {
    this.emp_name = '';
    this.emp_age = '';
    this.emp_sal = '';
  }

  updateEmployee() 
  {
    for (var i = 0; i < this.emps.length; i++) {
      if (this.emp_name == this.emps[i].name) {
        console.log('Index is ',i)
        this.emps[i].age = this.emp_age;
        this.emps[i].sal = this.emp_sal;
        break;
      }
    }
    console.log(this.emps)

  }

    removeEmployee(index){
      this.emps.splice(index, 1)
    }

  }
