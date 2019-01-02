import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  private doc: any = {};
  private boolean_btn : boolean = true;
  private doctors: any[] = [];
  private edit_id : string;
  constructor(private http: Http) { }

  ngOnInit() {
    this.getRecord();
  }

  updateRecord(){
    this.http.put('https://eshop-5ae25.firebaseio.com/doctors/' + this.edit_id + '.json',this.doc).subscribe(
      (res) => {
        console.log('updated')
      },
      (err) => {
        console.log('The error is ', err)
      },
      () => {
        this.getRecord();
      }
    );
  }

  editDoc(doctor){
this.doc = doctor.data;
this.edit_id = doctor.id;
this.boolean_btn = false;

  }

  delDoc(key) {
    console.log('The delted key is ', key)
    this.http.delete('https://eshop-5ae25.firebaseio.com/doctors/' + key + '.json').subscribe(
      (res) => {
        console.log('deleted')
      },
      (err) => {
        console.log('The error is ', err)
      },
      () => {
        this.getRecord();
      }
    );

  }

  getRecord() {
    this.http.get('https://eshop-5ae25.firebaseio.com/doctors.json').subscribe(
      (res) => {
        var cc = res.json();
        console.log(JSON.stringify(cc));
        var keys = Object.keys(cc);
        this.doctors = keys.map((key) => {
          return { data: cc[key], id: key };
        });
        console.log(keys);

        console.log('The keys rre ', keys)
      },
      (err) => {
        console.log('the error is ', err)
      },
      () => {

      }

    )
  }





  saveRecord() {
    console.log(this.doc)

    this.http.post('https://eshop-5ae25.firebaseio.com/doctors.json', this.doc).subscribe(
      (res) => {
        console.log('The response is ', res.json())
      },
      (err) => {
        console.log('The error is ', err)
      },
      () => {
        console.log('request completed')
        this.doc = {};
      }
    )
  }

}










