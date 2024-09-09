import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutes } from './shopping-cart.routes';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, RouterModule.forChild(ShoppingCartRoutes)],
})
export class ShoppingCartModule {}
