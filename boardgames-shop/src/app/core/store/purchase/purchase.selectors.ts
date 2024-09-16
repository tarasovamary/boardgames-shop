import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchaseState } from './purchase.state';

export const selectPurchaseKey = 'PURCHASES';

export const getPurchaseState = createFeatureSelector<PurchaseState>(selectPurchaseKey);

export const selectAllPurchases = createSelector(getPurchaseState, (state: PurchaseState) => state.purchases);
