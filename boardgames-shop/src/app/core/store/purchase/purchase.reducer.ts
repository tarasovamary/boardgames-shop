import { createReducer, on } from '@ngrx/store';
import * as PurchaseActions from './purchase.actions';
import { initialState } from './purchase.state';

export const purchaseReducer = createReducer(
  initialState,

  on(PurchaseActions.addOrder, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
  })),
);
