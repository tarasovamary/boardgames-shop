import { Game } from '../../models/game.model';

export interface GamesState {
  games: Game[];
  loading: boolean;
  error: string | null;
}

export const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};
