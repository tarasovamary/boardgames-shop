import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CartItem } from '../../../../core/models/cart-item.model';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import { selectCartItems } from '../../../../core/store/cart/cart.selector';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss',
})
export class GameItemComponent {
  @Input({ required: true }) game!: Game;
  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);

  constructor(private store: Store) {}

  addToCart(game: Game): void {
    this.store.dispatch(CartActions.addGameToCart({ game }));
  }
  isGameInCart(gameId: string): Observable<boolean> {
    return this.cartItems$.pipe(map((item) => item.some((item) => item.game.id === gameId)));
  }
  updateQuantity(gameId: string, quantity: number) {
    this.store.dispatch(CartActions.updateGameQuantity({ gameId, quantity }));
  }
}
