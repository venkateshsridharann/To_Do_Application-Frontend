import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailedViewComponent } from './item-detailed-view.component';

describe('ItemDetailedViewComponent', () => {
  let component: ItemDetailedViewComponent;
  let fixture: ComponentFixture<ItemDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
