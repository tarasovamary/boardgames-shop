import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import { selectCartItems, selectCartTotalPrice } from '../../../../core/store/cart/cart.selector';
import { OrderCheckoutComponent } from '../order-checkout/order-checkout.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  cartItems$: Observable<Game[]> = this.store.select(selectCartItems);
  totalPrice$: Observable<number> = this.store.select(selectCartTotalPrice);

  constructor(
    private store: Store,
    public dialog: MatDialog,
  ) {}

  openOrderCheckoutDialog(): void {
    const dialogRef = this.dialog.open(OrderCheckoutComponent);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
