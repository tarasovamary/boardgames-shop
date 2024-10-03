import { createAction, props } from '@ngrx/store';
import { Purchase } from '../../models/purchase.model';

export const addPurchase = createAction('[PURCHASES] Add Purchase', props<{ purchase: Purchase[] }>());

export const updatePurchaseQuantity = createAction(
  '[PURCHASES] Update Purchase Quantity',
  props<{ gameId: string; quantity: number }>(),
);
