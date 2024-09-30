import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import { selectCartItems, selectCartTotalPrice } from '../../../../core/store/cart/cart.selector';
import * as PurchasesActions from '../../../../core/store/purchase/purchase.actions';

export interface OrderForm {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  address: string | null;
}
export type OrderFormGroup = FormGroup<{
  [K in keyof OrderForm]: FormControl<OrderForm[K]>;
}>;

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss',
})
export class OrderCheckoutComponent implements OnInit {
  orderForm!: OrderFormGroup;

  cartItems$: Observable<Game[]> = this.store.select(selectCartItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<OrderCheckoutComponent>,
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });

    // Subscribe to changes in the cart
    this.cartItems$.pipe(takeUntil(this.unsubscribeAll)).subscribe((cartItems) => {
      // If the cart is empty, close the dialog
      if (cartItems.length === 0) {
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  submitOrder(): void {
    this.store.dispatch(CartActions.clearCart());

    this.goBack();
  }

  goBack() {
    this.router.navigate(['./games']);
  }

  addPurchases(purchases: Game[]): void {
    this.store.dispatch(PurchasesActions.addPurchases({ purchases }));
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
