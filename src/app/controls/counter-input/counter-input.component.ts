import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }]
})
export class CounterInputComponent implements ControlValueAccessor {

  _counterValueasasasa = 0;

  get counterValue() {
    return this._counterValueasasasa;
  }

  set counterValue(val) {
    this._counterValueasasasa = val;
    this.propagateChange(this._counterValueasasasa);
  }

  private propagateChange = (_: any) => {};


  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

}
