import { Component, ElementRef, forwardRef, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldControl } from "@angular/material";
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { FocusMonitor } from "@angular/cdk/a11y";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Subscription } from "rxjs/Subscription";

export class DateOfBirth {
  constructor(public day?: number, public month?: number, public year?: number) { }
}

@Component({
  selector: 'custom-material-date',
  templateUrl: './custom-material-date.component.html',
  styleUrls: ['./custom-material-date.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: CustomMaterialDateComponent},
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CustomMaterialDateComponent), multi: true},
    FocusMonitor
  ],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedBy]': 'describedBy'
  }
})
export class CustomMaterialDateComponent implements MatFormFieldControl<DateOfBirth>, ControlValueAccessor, OnDestroy  {

  static nextId = 0;


  parts: FormGroup;
  describedBy = '';
  focused: boolean = false;
  stateChanges = new Subject<void>();

  private subscriptions$: Subscription[] = [];

  // readonly shouldLabelFloat = true;
  readonly ngControl: NgControl | null = null;
  readonly errorState: boolean = false;
  readonly controlType: string = 'custom-material-date';

  get empty(): boolean {
    const n = this.parts.value;
    return !n.day && !n.month && !n.year;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  readonly id = `custom-material-date-${CustomMaterialDateComponent.nextId++}`;

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(ph: string) {
    this._placeholder = ph;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;


  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(dis: boolean) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): DateOfBirth | null {
    const n = this.parts.value;
    if (n.day.length <= 2 && n.month.length <= 2 && n.year.length === 4) {
      return new DateOfBirth(n.day, n.month, n.year);
    }
    return null;
  }
  set value(dob: DateOfBirth | null) {
    const { day, month, year } = dob || <DateOfBirth>{day: null, month: null, year: null};
    this.parts.setValue({ day, month, year});
    this.stateChanges.next();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);

    this.subscriptions$.forEach(s => s.unsubscribe());

  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  constructor(fb: FormBuilder,
              private fm: FocusMonitor,
              @Inject(ElementRef) private elRef: ElementRef) {

    this.parts = fb.group({
      day: '',
      month: '',
      year: ''
    });

    this.subscriptions$ =[
      ...this.subscriptions$,
      this.parts.controls.day.valueChanges.subscribe(this.dayChanges.bind(this)),
      this.parts.controls.month.valueChanges.subscribe(this.monthChanges.bind(this)),
      this.parts.controls.year.valueChanges.subscribe(this.yearChanges.bind(this)),
      fm.monitor(elRef.nativeElement, true).subscribe(origin => {
        this.focused = !!origin;
        this.stateChanges.next();
      })
    ];
  }

  private dayChanges(value: string) {
    const day = this.elRef.nativeElement.querySelector('input#day');
    const month = this.elRef.nativeElement.querySelector('input#month');
    const dayInt = parseInt(value);

    day.value = isNaN(dayInt) ? '' : dayInt;
    if (day.value.length >= 2) {
      day.value = day.value.substring(0, 2);
      month.focus();
      this.propagateChage(this.value);
    }
  }

  private monthChanges(value: string) {
    const month = this.elRef.nativeElement.querySelector('input#month');
    const year = this.elRef.nativeElement.querySelector('input#year');
    const monthInt = parseInt(value);

    month.value = isNaN(monthInt) ? '' : monthInt;
    if (month.value.length >= 2) {
      month.value = month.value.substring(0, 2);
      year.focus();
      this.propagateChage(this.value);
    }
  }

  private yearChanges(value: string) {
    const year = this.elRef.nativeElement.querySelector('input#year');
    const yearInt = parseInt(value);

    year.value = isNaN(yearInt) ? '' : yearInt;
    if (year.value.length >= 4) {
      year.value = year.value.substring(0, 4);
      this.propagateChage(this.value);
    }
  }

  readonly shouldPlaceholderFloat: boolean;

  registerOnChange(fn: any): void {
    this.propagateChage = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    if (value !== null && value !== undefined) {
      this.parts.setValue({
        day: value.day,
        month: value.month,
        year: value.year
      });
    }
  }

  private propagateChage = (_: any) => {};
}
