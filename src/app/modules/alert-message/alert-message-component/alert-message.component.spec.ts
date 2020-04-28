import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { alertMessageComponent } from './alert-message.component';

describe('alertMessageComponent', () => {
  let component: alertMessageComponent;
  let fixture: ComponentFixture<alertMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ alertMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(alertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
