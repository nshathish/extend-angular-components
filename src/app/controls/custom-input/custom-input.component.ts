import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const noop = () => {};

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomInputComponent,
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {

  day: number = null;
  month: number = null;
  year: number = null;


  private onTouchedCallback: () => void = noop;
  private onChangedCallback: (_:any) => void = noop;

  get value(): Date {
    return this.getDate();
  }
  set value(v: Date) {
    const date = this.getDate();
    if (v !== date) {
      this.day = date.getDay();
      this.month = date.getMonth();
      this.year = date.getFullYear();
      this.onChangedCallback(v);
    }
  }

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChangedCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {
    const date = this.getDate();
    let valueDate: Date;
    if (value && ((valueDate = new Date(value)) !== date)) {
      this.day = valueDate.getDay();
      this.month = valueDate.getMonth();
      this.year = valueDate.getFullYear();
    }
  }

  dayChanged(e) {

  }

  monthChanged(e) {

  }

  yearChanged(e) {

  }

  private getDate(): Date {
    return new Date(`${this.day}/${this.month}/${this.year}`);
  }

}
