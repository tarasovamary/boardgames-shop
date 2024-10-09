import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PurchaseEffects } from '../../core/store/purchase/purchase.effects';
import { purchaseReducer } from '../../core/store/purchase/purchase.reducer';
import { SharedModule } from '../../shared/shared.module';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { PurchaseItemComponent } from './components/purchase-item/purchase-item.component';
import { PurchaseHistoryRoutes } from './purchase-history.routes';

@NgModule({
  declarations: [PurchaseHistoryComponent, PurchaseItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseHistoryRoutes),
    StoreModule.forFeature('PURCHASES', purchaseReducer),
    EffectsModule.forFeature([PurchaseEffects]),
    SharedModule,
  ],
})
export class PurchaseHistoryModule {}
