import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const loadPurchases = createAction('[PURCHASES] Load Purchases');
export const loadPurchasesSuccess = createAction(
  '[PURCHASES] Load Purchases (Success)',
  props<{ purchases: Game[] }>(),
);
export const loadPurchasesFailure = createAction('[PURCHASES] Load Purchases (Failure)', props<{ error: string }>());

export const addPurchases = createAction('[PURCHASES] Add Purchases', props<{ purchases: Game[] }>());
export const addPurchasesSuccess = createAction('[PURCHASES] Add Purchases (Success)', props<{ purchases: Game[] }>());
export const addPurchasesFailure = createAction('[PURCHASES] Add Purchases (Failure)', props<{ error: any }>());
