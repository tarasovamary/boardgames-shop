import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { purchaseReducer } from '../../core/store/purchase/purchase.reducer';
import { SharedModule } from '../../shared/shared.module';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutes } from './purchase-history.routes';
import { PurchaseItemComponent } from './components/purchase-item/purchase-item.component';

@NgModule({
  declarations: [PurchaseHistoryComponent, PurchaseItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseHistoryRoutes),
    StoreModule.forFeature('PURCHASES', purchaseReducer),
    SharedModule,
  ],
})
export class PurchaseHistoryModule {}
