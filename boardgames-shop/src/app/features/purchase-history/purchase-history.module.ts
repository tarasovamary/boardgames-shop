import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutes } from './purchase-history.routes';

@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [CommonModule, RouterModule.forChild(PurchaseHistoryRoutes)],
})
export class PurchaseHistoryModule {}
