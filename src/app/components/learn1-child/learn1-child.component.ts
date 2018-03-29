import { Component, OnInit } from '@angular/core';
import { Car } from "../learn1/car";

@Component({
  selector: 'app-learn1-child',
  templateUrl: './learn1-child.component.html',
  styleUrls: ['./learn1-child.component.scss']
})
export class Learn1ChildComponent implements OnInit {

  constructor(car: Car) {
    console.log('child num', car.num);
  }

  ngOnInit() {
  }

}
