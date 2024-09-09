import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListModule } from './games-list/games-list.module';
import { PurchaseHistoryModule } from './purchase-history/purchase-history.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GamesListModule,
    PurchaseHistoryModule,
    ShoppingCartModule,
  ]
})
export class FeaturesModule { }
