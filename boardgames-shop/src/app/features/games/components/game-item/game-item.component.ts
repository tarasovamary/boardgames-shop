import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss',
})
export class GameItemComponent {
  @Input({ required: true }) game!: Game;

  constructor(private store: Store) {}

  addToCart(game: Game) {
    this.store.dispatch(CartActions.addGameToCart({ game }));
  }
}
