import { createReducer, on } from '@ngrx/store';
import * as PurchaseActions from './purchase.actions';
import { initialState } from './purchase.state';

export const purchaseReducer = createReducer(
  initialState,
  on(PurchaseActions.addPurchases, (state, { purchases }) => ({
    ...state,
    purchases: [
      ...state.purchases,
      ...purchases.map((purchase) => ({
        ...purchase,
        date: new Date(),
      })),
    ],
  })),
);
