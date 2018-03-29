import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialDateComponent } from './custom-material-date.component';

describe('CustomMaterialDateComponent', () => {
  let component: CustomMaterialDateComponent;
  let fixture: ComponentFixture<CustomMaterialDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMaterialDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMaterialDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
