import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PurchaseHistoryComponent } from './purchase-history.component';

describe('PurchaseHistoryComponent', () => {
  let component: PurchaseHistoryComponent;
  let fixture: ComponentFixture<PurchaseHistoryComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseHistoryComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseHistoryComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return id of the item when id exists', () => {
    const item = { id: '123', name: 'Test Game' };
    const index = 0;

    const result = component.trackByFn(index, item);

    expect(result).toBe('123');
  });

  it('should return the index when item id does not exist', () => {
    const item = { name: 'Test Game' }; // no id in the item
    const index = 2;

    const result = component.trackByFn(index, item);

    expect(result).toBe(index);
  });
});
