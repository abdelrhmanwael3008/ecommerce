import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordComponent } from './forgetpasswordd.component';

describe('ForgetpasswordComponent', () => {
  let component: ForgetpasswordComponent;
  let fixture: ComponentFixture<ForgetpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetpasswordComponent]
    });
    fixture = TestBed.createComponent(ForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
