import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as moment from "moment";

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDateComponent),
    multi: true
  }]
})
export class CustomDateComponent implements ControlValueAccessor {

  private day: number;
  private month: number;
  private year: number;

  private propagateChange = (_:any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      if (!(value instanceof Date)) {
        value = moment(value,'DD/MM/YYYY');
      }

      this.day = value.date();
      this.month = value.month() + 1;
      this.year = value.year();
    }
  }

  dayChanged(e: Event | any) {
    const { value } = e.target;
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      e.target.value = '';
    } else if (intValue > 31) {
      e.target.value = value.length == 2 ? value.substring(0, 1) : value.substring(0, 2);
    } else {
      this.day = parseInt(e.target.value);
    }

    this.propagateChange(new Date(`${this.year}/${this.month}/${this.day}`));
  }

  monthChanged(e) {
    const { value } = e.target;
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      e.target.value = '';
    } else if (intValue > 12) {
      e.target.value = value.length == 2 ? value.substring(0, 1) : value.substring(0, 2);
    } else {
      e.target.value = intValue;
      this.propagateChange(new Date(`${this.year}/${parseInt(e.target.value)}/${this.day}`));
    }
  }

  yearChanged(e) {
    console.log('year', new Date().getFullYear());

    const { value } = e.target;
    const intValue = parseInt(value, 10);
    if (isNaN(intValue)) {
      e.target.value = '';
    } else if (value.length === 4 && intValue < 1900 || intValue > new Date().getFullYear()) {
      e.target.value = value.length == 4 ? value.substring(0, 3) : value.substring(0, 4);
    } else {
      e.target.value = intValue;
      this.propagateChange(new Date(`${this.year}/${this.month}/${e.target.value}`));
    }
  }

}
