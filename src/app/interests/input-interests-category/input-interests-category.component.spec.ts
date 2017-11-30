import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInterestsCategoryComponent } from './input-interests-category.component';

describe('InputInterestsCategoryComponent', () => {
  let component: InputInterestsCategoryComponent;
  let fixture: ComponentFixture<InputInterestsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInterestsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInterestsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
