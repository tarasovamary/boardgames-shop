import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import { selectCartItems, selectCartTotalPrice } from '../../../../core/store/cart/cart.selector';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrl: './order-checkout.component.scss',
})
export class OrderCheckoutComponent implements OnInit {
  orderForm!: FormGroup;

  cartItems$: Observable<Game[]> = this.store.select(selectCartItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  constructor(
    public dialogRef: MatDialogRef<OrderCheckoutComponent>,
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      address: [null, Validators.required],
    });
  }

  submitOrder(): void {
    this.dialogRef.close();

    this.router.navigate(['./games']);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
