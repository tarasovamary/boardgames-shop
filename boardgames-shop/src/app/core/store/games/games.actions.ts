import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.model';

export const loadGames = createAction('[GAMES] Load Games');
export const loadGamesSuccess = createAction('[GAMES] Load Games (Success)', props<{ games: Game[] }>());
export const loadGamesFailure = createAction('[GAMES] Load Games (Failure)', props<{ error: string }>());
