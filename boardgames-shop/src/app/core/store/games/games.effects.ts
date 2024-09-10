import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GamesService } from '../../services/games.service';
import * as GamesActions from './games.actions';

@Injectable()
export class GamesEffects {
  constructor(
    private actions$: Actions,
    private gamesService: GamesService,
  ) {}

  loadBoardGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.loadGames),
      mergeMap(() =>
        this.gamesService.getAllGames().pipe(
          map((games) => GamesActions.loadGamesSuccess({ games })),
          catchError((error) => of(GamesActions.loadGamesFailure({ error }))),
        ),
      ),
    ),
  );
}
