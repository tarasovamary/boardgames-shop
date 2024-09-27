import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import { OrderCheckoutComponent } from './order-checkout.component';

describe('OrderCheckoutComponent', () => {
  let component: OrderCheckoutComponent;
  let fixture: ComponentFixture<OrderCheckoutComponent>;
  let mockStore: MockStore;
  let mockRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ReactiveFormsModule],
      declarations: [OrderCheckoutComponent],
      providers: [
        provideMockStore({}),
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCheckoutComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockRouter = TestBed.inject(Router);

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

  it('should navigate to games', () => {
    component.submitOrder();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['./games']);
  });
});
