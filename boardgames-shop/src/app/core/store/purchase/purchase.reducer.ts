import { createReducer, on } from '@ngrx/store';
import * as PurchaseActions from './purchase.actions';
import { initialState } from './purchase.state';

export const purchaseReducer = createReducer(
  initialState,
  on(PurchaseActions.loadPurchases, (state) => ({
    ...state,
    loading: true,
  })),
  on(PurchaseActions.loadPurchasesSuccess, (state, { purchases }) => ({
    ...state,
    purchases,
    loading: false,
    error: null,
  })),
  on(PurchaseActions.loadPurchasesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(PurchaseActions.addPurchases, (state) => ({
    ...state,
    loading: true,
  })),
  on(PurchaseActions.addPurchasesSuccess, (state, { purchases }) => ({
    ...state,
    purchases,
    loading: false,
    error: null,
  })),
  on(PurchaseActions.addPurchasesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);
