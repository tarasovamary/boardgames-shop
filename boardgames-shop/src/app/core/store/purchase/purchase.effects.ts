import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { Order, Purchase } from '../../models/purchase.model';
import * as PurchaseActions from './purchase.actions';

@Injectable()
export class PurchaseEffects {
  constructor(private actions$: Actions) {}

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PurchaseActions.addPurchase),
      map((action) => {
        const newOrder = this.createOrder(action.purchase);
        return PurchaseActions.addOrder({ order: newOrder });
      }),
    ),
  );

  private createOrder(purchase: Purchase[]): Order {
    const totalPrice = purchase.reduce((total, item) => total + item.game.price * item.quantity, 0);
    return {
      id: new Date().getTime().toString(),
      date: new Date(),
      purchase,
      totalPrice,
    };
  }
}
