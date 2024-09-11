import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { initialState } from './cart.state';

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addGameToCart, (state, { game }) => ({
    ...state,
    gamesInCart: [...state.gamesInCart, game],
  })),
  on(CartActions.removeGameFromCart, (state, { gameId }) => ({
    ...state,
    gamesInCart: state.gamesInCart.filter((game) => game.id !== gameId),
  })),
);
