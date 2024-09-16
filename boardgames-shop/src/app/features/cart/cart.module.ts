import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../../core/store/cart/cart.reducer';
import { CartRoutes } from './cart.routes';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderCheckoutComponent } from './components/order-checkout/order-checkout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingCartComponent, OrderCheckoutComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild(CartRoutes),
    StoreModule.forFeature('CART', cartReducer),
    SharedModule,
  ],
})
export class CartModule {}
