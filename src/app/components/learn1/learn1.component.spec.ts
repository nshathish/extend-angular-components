import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn1Component } from './learn1.component';

describe('Learn1Component', () => {
  let component: Learn1Component;
  let fixture: ComponentFixture<Learn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
