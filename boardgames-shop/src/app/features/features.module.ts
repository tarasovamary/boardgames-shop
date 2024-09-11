import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { GamesModule } from './games/games.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';

@NgModule({
  declarations: [],
  imports: [GamesModule, PurchaseHistoryModule, CartModule],
})
export class FeaturesModule {}
