import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  location = 'Bangalore';
  name = 'Firozkhan'
  disableBox = true;
  show = false;
  show1 = 'yes'
  show2 = 'red'
  color = 'Green'
  data = ['Firoz', 'Sultan', 'Akhlaque', 'Dude']
  data1 = [
    {
      name: 'Firoz khan',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Firoz khan',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Akhlaque',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Asfaque',
      age: 23,
      work:'Data Scientist'
    }
  ]
  getVal() {
    alert("Hi welcomw to our website")
  }
  getName(name:any) {
    alert(name)
  }
  getcity(city:any) {
    alert(city)
  }
  myEvent(evt:any) {
    console.log(evt)
  }
  enableBox() {
    this.disableBox=false
  }
  getUserValue(values:any) {
    console.log(values)
  }
  parentComponent(data1:any) {
    console.log(data1)
  }
  today = Date.now()
  str = 'HiIamFriozkhan'
  val = 10;
}
