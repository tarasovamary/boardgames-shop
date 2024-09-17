import { Game } from '../../models/game.model';

export interface PurchaseState {
  purchases: Game[];
}

export const initialState: PurchaseState = {
  purchases: [],
};
