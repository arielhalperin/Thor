import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSocialComponent } from './input-social.component';

describe('InputSocialComponent', () => {
  let component: InputSocialComponent;
  let fixture: ComponentFixture<InputSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
