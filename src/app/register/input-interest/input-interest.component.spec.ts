import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInterestComponent } from './input-interest.component';

describe('InputInterestComponent', () => {
  let component: InputInterestComponent;
  let fixture: ComponentFixture<InputInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
