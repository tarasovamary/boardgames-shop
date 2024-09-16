import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { PurchasesService } from '../../services/purchases.service';
import * as PurchasesActions from './purchase.actions';

@Injectable()
export class PurchasesEffects {
  constructor(
    private actions$: Actions,
    private purchasesService: PurchasesService,
  ) {}

  loadPurchases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchasesActions.loadPurchases),
      mergeMap(() =>
        this.purchasesService.getAllPurchases().pipe(
          map((purchases) => PurchasesActions.loadPurchasesSuccess({ purchases })),
          catchError((error) => of(PurchasesActions.loadPurchasesFailure({ error }))),
        ),
      ),
    ),
  );

  addPurchases$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchasesActions.addPurchases),
      mergeMap(({ purchases }) =>
        this.purchasesService.addPurchases(purchases).pipe(
          map((purchases) => PurchasesActions.addPurchasesSuccess({ purchases })),
          catchError((error) => of(PurchasesActions.addPurchasesFailure({ error }))),
        ),
      ),
    ),
  );
}
