import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../core/store/cart/cart.reducer';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutes } from './shopping-cart.routes';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [CommonModule, RouterModule.forChild(ShoppingCartRoutes), StoreModule.forFeature('CART', cartReducer)],
})
export class ShoppingCartModule {}
