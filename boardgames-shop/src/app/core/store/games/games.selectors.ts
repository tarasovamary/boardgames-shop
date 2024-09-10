import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.state';

export const selectGamesKey = 'GAMES';

export const getGamesState = createFeatureSelector<GamesState>(selectGamesKey);

export const selectAllGames = createSelector(getGamesState, (state: GamesState) => state.games);

export const selectGamesLoading = createSelector(getGamesState, (state: GamesState) => state.loading);
