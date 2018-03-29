import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn1ChildComponent } from './learn1-child.component';

describe('Learn1ChildComponent', () => {
  let component: Learn1ChildComponent;
  let fixture: ComponentFixture<Learn1ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn1ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
