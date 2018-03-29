import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn1SiblingComponent } from './learn1-sibling.component';

describe('Learn1SiblingComponent', () => {
  let component: Learn1SiblingComponent;
  let fixture: ComponentFixture<Learn1SiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn1SiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn1SiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
