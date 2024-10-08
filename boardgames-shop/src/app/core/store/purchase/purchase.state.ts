import { Game } from '../../models/game.model';
import { Purchase } from '../../models/purchase.model';

export interface PurchaseState {
  purchase: Purchase[];
}

export const initialState: PurchaseState = {
  purchase: [],
};
