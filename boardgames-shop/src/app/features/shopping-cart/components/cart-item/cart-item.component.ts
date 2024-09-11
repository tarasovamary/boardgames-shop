import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input({ required: true }) game!: Game;

  constructor(private store: Store) {}

  removeFromCart(id: number) {
    this.store.dispatch(CartActions.removeGameFromCart({ gameId: id }));
  }
}
