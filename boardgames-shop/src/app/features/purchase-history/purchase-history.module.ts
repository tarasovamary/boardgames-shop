import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { purchaseReducer } from '../../core/store/purchase/purchase.reducer';
import { PurchasesEffects } from '../../core/store/purchase/purchase.effects';
import { SharedModule } from '../../shared/shared.module';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutes } from './purchase-history.routes';

@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PurchaseHistoryRoutes),
    StoreModule.forFeature('PURCHASES', purchaseReducer),
    EffectsModule.forFeature([PurchasesEffects]),
    SharedModule,
  ],
})
export class PurchaseHistoryModule {}
