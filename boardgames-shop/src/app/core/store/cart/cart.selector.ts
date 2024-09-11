import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const selectCartState = createFeatureSelector<CartState>('CART');

export const selectCartItems = createSelector(selectCartState, (state: CartState) => state.gamesInCart);

export const selectCartTotalPrice = createSelector(selectCartState, (state: CartState) =>
  state.gamesInCart.reduce((total, game) => total + game.price, 0),
);
