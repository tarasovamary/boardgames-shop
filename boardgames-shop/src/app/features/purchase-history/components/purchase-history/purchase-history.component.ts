import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import * as PurchasesActions from '../../../../core/store/purchase/purchase.actions';
import { selectAllPurchases } from '../../../../core/store/purchase/purchase.selectors';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.scss',
})
export class PurchaseHistoryComponent {
  purchaseItems$: Observable<Game[]> = this.store.select(selectAllPurchases);

  constructor(private store: Store) {

  }
}
