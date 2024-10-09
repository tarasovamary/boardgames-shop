import { Order } from '../../models/purchase.model';

export interface PurchaseState {
  orders: Order[];
}

export const initialState: PurchaseState = {
  orders: [],
};
