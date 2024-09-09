import { NgModule } from '@angular/core';
import { GamesListModule } from './games-list/games-list.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [],
  imports: [GamesListModule, PurchaseHistoryModule, ShoppingCartModule],
})
export class FeaturesModule {}
