import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartItemComponent } from '../features/cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatTooltipModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
