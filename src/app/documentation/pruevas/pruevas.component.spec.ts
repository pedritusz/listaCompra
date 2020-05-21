import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruevasComponent } from './pruevas.component';

describe('PruevasComponent', () => {
  let component: PruevasComponent;
  let fixture: ComponentFixture<PruevasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruevasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
