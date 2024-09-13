import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const addGameToCart = createAction('[CART] Add Game', props<{ game: Game }>());
export const removeGameFromCart = createAction('[CART] Remove Game', props<{ gameId: number }>());
export const clearCart = createAction('[CART] Clear cart');