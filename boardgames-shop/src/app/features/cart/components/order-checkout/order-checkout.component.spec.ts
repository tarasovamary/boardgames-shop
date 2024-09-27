import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import { OrderCheckoutComponent } from './order-checkout.component';

describe('OrderCheckoutComponent', () => {
  let component: OrderCheckoutComponent;
  let fixture: ComponentFixture<OrderCheckoutComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ReactiveFormsModule],
      declarations: [OrderCheckoutComponent],
      providers: [provideMockStore({}), { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCheckoutComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch clearCart action', () => {
    spyOn(mockStore, 'dispatch');

    component.submitOrder();

    expect(mockStore.dispatch).toHaveBeenCalledWith(CartActions.clearCart());
  });
});
