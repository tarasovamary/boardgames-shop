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
});
