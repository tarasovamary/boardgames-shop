import { Game } from '../../models/game.model';

export interface CartState {
  cartItems: Game[];
}

export const initialState: CartState = {
  cartItems: [],
};
