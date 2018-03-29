import { Component } from '@angular/core';
import { DateOfBirth } from "./controls/custom-material-date/custom-material-date.component";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dobForm: FormGroup;

  counter: number = 5;
  myDate = '24/03/2018';
  myDob1 = new DateOfBirth(24, 5, 1975);

  constructor(private fb: FormBuilder) {
    this.dobForm = fb.group({
      myDob: new DateOfBirth(24, 5, 1975)
    });
  }

  submit(value) {
    console.log('formvalue', value, this.counter);
  }
}
