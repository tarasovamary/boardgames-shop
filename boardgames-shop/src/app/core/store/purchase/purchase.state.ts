import { Game } from '../../models/game.model';
import { Purchase } from '../../models/purchase.model';

export interface PurchaseState {
  purchases: Purchase[];
}

export const initialState: PurchaseState = {
  purchases: [],
};
