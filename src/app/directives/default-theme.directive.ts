import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDefaultTheme]'
})
export class DefaultThemeDirective implements AfterViewInit {

  @Input() color: string;
  @Input() fontSize: number;

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.color;
    this.elRef.nativeElement.style.fontSize = `${this.fontSize}px`;
  }

  constructor(private elRef: ElementRef) { }

}
