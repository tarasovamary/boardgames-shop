import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const selectCartState = createFeatureSelector<CartState>('CART');

export const selectCartItems = createSelector(selectCartState, (state: CartState) => state.cartItems);

export const selectCartTotalPrice = createSelector(selectCartState, (state: CartState) =>
  state.cartItems.reduce((total, item) => total + item.game.price * item.quantity, 0),
);

export const selectCartTotalQuantity = createSelector(selectCartState, (state: CartState) =>
  state.cartItems.reduce((total, item) => total + item.quantity, 0),
);
