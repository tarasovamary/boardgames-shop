import { createReducer, on } from '@ngrx/store';
import * as GamesActions from './games.actions';
import { initialState } from './games.state';

export const gamesReducer = createReducer(
  initialState,
  on(GamesActions.loadGames, (state) => ({
    ...state,
    loading: true,
  })),
  on(GamesActions.loadGamesSuccess, (state, { games }) => ({
    ...state,
    games,
    loading: false,
    error: null,
  })),
  on(GamesActions.loadGamesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
);
