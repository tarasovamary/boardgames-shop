import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../models/cart-item.model';
import { Game } from '../../models/game.model';
import * as CartActions from './cart.actions';
import { initialState } from './cart.state';

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addGameToCart, (state, { game }) => {
    const existingItem = state.cartItems.find((item) => item.game.id === game.id);

    const updatedCartItems = existingItem
      ? updateCartItemQuantity(state.cartItems, game.id, existingItem.quantity + 1)
      : addNewItemToCart(state.cartItems, game);

    return {
      ...state,
      cartItems: updatedCartItems,
    };
  }),

  on(CartActions.updateGameQuantity, (state, { gameId, quantity }) => ({
    ...state,
    cartItems: updateCartItemQuantity(state.cartItems, gameId, quantity),
  })),

  on(CartActions.removeGameFromCart, (state, { gameId }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.game.id !== gameId),
  })),

  on(CartActions.clearCart, (state) => ({
    ...state,
    cartItems: [],
  })),
);

function updateCartItemQuantity(cartItems: CartItem[], gameId: string, quantity: number) {
  return cartItems.map((item) => (item.game.id === gameId ? { ...item, quantity } : item));
}

function addNewItemToCart(cartItems: CartItem[], game: Game) {
  return [...cartItems, { game, quantity: 1 }];
}
