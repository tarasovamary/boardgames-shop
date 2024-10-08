import { CartItem } from '../../models/cart-item.model';

export interface CartState {
  cartItems: CartItem[];
}

export const initialState: CartState = {
  cartItems: [],
};
