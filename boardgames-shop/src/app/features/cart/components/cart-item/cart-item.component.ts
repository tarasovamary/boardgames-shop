import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from '../../../../core/models/cart-item.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input({ required: true }) item!: CartItem;

  constructor(private store: Store) {}

  removeFromCart(gameId: string): void {
    this.store.dispatch(CartActions.removeGameFromCart({ gameId }));
  }

  updateQuantity(gameId: string, quantity: number) {
    if (quantity >= 0) {
      this.store.dispatch(CartActions.updateGameQuantity({ gameId, quantity }));
    }
  }
}
