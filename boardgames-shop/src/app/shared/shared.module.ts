import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartItemComponent } from '../features/cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [HeaderComponent, CartItemComponent],
  imports: [CommonModule, RouterModule, MatTooltipModule],
  exports: [HeaderComponent, CartItemComponent],
})
export class SharedModule {}
