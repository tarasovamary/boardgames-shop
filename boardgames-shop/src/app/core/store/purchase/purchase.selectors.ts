import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchaseState } from './purchase.state';

export const selectPurchaseKey = 'PURCHASES';

export const getPurchaseState = createFeatureSelector<PurchaseState>(selectPurchaseKey);

export const selectAllPurchases = createSelector(getPurchaseState, (state: PurchaseState) => state.orders);

export const selectPurchaseTotalPrice = createSelector(getPurchaseState, (state: PurchaseState) =>
  state.orders.reduce((total, order) => {
    return total + order.purchase.reduce((orderTotal, item) => orderTotal + item.game.price * item.quantity, 0);
  }, 0),
);
