import { Component, OnInit } from '@angular/core';
import { Car } from "../learn1/car";

@Component({
  selector: 'app-learn1-sibling',
  templateUrl: './learn1-sibling.component.html',
  styleUrls: ['./learn1-sibling.component.scss']
})
export class Learn1SiblingComponent implements OnInit {

  constructor(car: Car) {
    console.log('sibling', car.num);
  }

  ngOnInit() {
  }

}
