import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
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
  cartItems$: Observable<Game[]> = this.store.select(selectCartItems);
  
  constructor(private store: Store) {}

  addToCart(game: Game): void {
    this.store.dispatch(CartActions.addGameToCart({ game }));
  }
  isGameInCart(gameId: number): Observable<boolean> {
    return this.cartItems$.pipe(map((game) => game.some((item) => item.id === gameId)));
  }

  removeFromCart(id: number): void {
    this.store.dispatch(CartActions.removeGameFromCart({ gameId: id }));
  }
}
