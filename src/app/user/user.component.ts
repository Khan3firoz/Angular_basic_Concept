import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() hero: any
  @Output() parentComponent:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit("Hello i am firoz khan")
  }

  sendData() {
    let data={name:'Firoz', age:25}
    console.log(data.name)
    console.log(data.age)
  }

}
