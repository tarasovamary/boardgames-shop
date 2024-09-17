import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const addPurchases = createAction('[PURCHASES] Add Purchases', props<{ purchases: Game[] }>());
