import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';
import { Purchase } from '../../models/purchase.model';

export const addPurchases = createAction('[PURCHASES] Add Purchases', props<{ purchases: Purchase[] }>());
