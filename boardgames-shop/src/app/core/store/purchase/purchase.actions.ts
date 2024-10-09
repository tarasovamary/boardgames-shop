import { createAction, props } from '@ngrx/store';
import { Order, Purchase } from '../../models/purchase.model';

export const addPurchase = createAction('[PURCHASES] Add Purchase', props<{ purchase: Purchase[] }>());

export const addOrder = createAction('[[PURCHASES] Add Order', props<{ order: Order }>());
