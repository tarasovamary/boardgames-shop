import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../core/store/cart/cart.reducer';
import { CartRoutes } from './cart.routes';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent, CartItemComponent],
  imports: [CommonModule, RouterModule.forChild(CartRoutes), StoreModule.forFeature('CART', cartReducer)],
})
export class CartModule {}
