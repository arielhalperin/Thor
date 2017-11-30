import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputInterestsListComponent } from './input-interests-list.component';

describe('InputInterestsListComponent', () => {
  let component: InputInterestsListComponent;
  let fixture: ComponentFixture<InputInterestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputInterestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputInterestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
