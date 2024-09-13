import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { initialState } from './cart.state';

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addGameToCart, (state, { game }) => ({
    ...state,
    cartItems: [...state.cartItems, game],
  })),
  on(CartActions.removeGameFromCart, (state, { gameId }) => ({
    ...state,
    cartItems: state.cartItems.filter((game) => game.id !== gameId),
  })),
  on(CartActions.clearCart, (state) => ({
    ...state,
    cartItems: [],
  })),
);
