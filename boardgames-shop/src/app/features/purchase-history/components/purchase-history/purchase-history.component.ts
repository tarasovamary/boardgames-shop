import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../../../../core/models/purchase.model';
import { selectAllPurchases, selectPurchaseTotalPrice } from '../../../../core/store/purchase/purchase.selectors';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.scss',
})
export class PurchaseHistoryComponent {
  purchaseItems$: Observable<Order[]> = this.store.select(selectAllPurchases);
  totalPurchasePrice$: Observable<number> = this.store.select(selectPurchaseTotalPrice);

  constructor(private store: Store) {}

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
