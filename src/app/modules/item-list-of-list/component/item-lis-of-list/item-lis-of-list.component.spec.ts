import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLisOfListComponent } from './item-lis-of-list.component';

describe('ItemLisOfListComponent', () => {
  let component: ItemLisOfListComponent;
  let fixture: ComponentFixture<ItemLisOfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLisOfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLisOfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
