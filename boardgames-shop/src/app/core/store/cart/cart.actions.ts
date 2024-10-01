import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const addGameToCart = createAction('[CART] Add Game', props<{ game: Game }>());
export const updateGameQuantity = createAction(
  '[CART] Update Game Quantity',
  props<{ gameId: string; quantity: number }>(),
);
export const removeGameFromCart = createAction('[CART] Remove Game', props<{ gameId: string }>());
export const clearCart = createAction('[CART] Clear cart');
