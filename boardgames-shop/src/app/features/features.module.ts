import { NgModule } from '@angular/core';
import { GamesModule } from './games/games.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [],
  imports: [GamesModule, PurchaseHistoryModule, ShoppingCartModule],
})
export class FeaturesModule {}
