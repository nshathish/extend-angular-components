import { Component, Inject, OnInit } from '@angular/core';
import { Car } from "./car";
import { CarMock } from "./car-mock";
import { Learn1ChildComponent } from "../learn1-child/learn1-child.component";

@Component({
  selector: 'app-learn1',
  templateUrl: './learn1.component.html',
  styleUrls: ['./learn1.component.scss'],
  providers: [
    { provide: Car, useClass: CarMock},
    { provide: 'SECURITY_KEY', useValue: 1234343 }
  ]
})
export class Learn1Component implements OnInit {

  constructor(car: Car,
              @Inject('SECURITY_KEY') securityKey) {
    console.log('num', car.num);
    console.log('security key', securityKey);
  }

  ngOnInit() {
  }

}
