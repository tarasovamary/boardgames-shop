import { createReducer, on } from '@ngrx/store';
import * as PurchaseActions from './purchase.actions';
import { initialState } from './purchase.state';

export const purchaseReducer = createReducer(
  initialState,

  on(PurchaseActions.addPurchase, (state, { purchase }) => {
    const updatedPurchases = [...state.purchase];

    purchase.forEach((newPurchase) => {
      const existingPurchaseIndex = updatedPurchases.findIndex((item) => item.game.id === newPurchase.game.id);

      if (existingPurchaseIndex !== -1) {
        // create new object with updated quantity
        updatedPurchases[existingPurchaseIndex] = {
          ...updatedPurchases[existingPurchaseIndex],
          quantity: updatedPurchases[existingPurchaseIndex].quantity + newPurchase.quantity,
        };
      } else {
        // add new purchase if it doesn't exist
        updatedPurchases.push(newPurchase);
      }
    });

    return {
      ...state,
      purchase: updatedPurchases,
    };
  }),
);
