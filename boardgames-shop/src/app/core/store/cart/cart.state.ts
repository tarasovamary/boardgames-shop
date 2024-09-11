import { Game } from '../../models/game.model';

export interface CartState {
  gamesInCart: Game[];
}

export const initialState: CartState = {
  gamesInCart: [],
};
