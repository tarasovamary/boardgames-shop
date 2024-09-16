import { Game } from '../../models/game.model';

export interface PurchaseState {
  purchases: Game[];
  loading: boolean;
  error: string | null;
}

export const initialState: PurchaseState = {
  purchases: [],
  loading: false,
  error: null,
};
