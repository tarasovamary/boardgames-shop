import { Route } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const CartRoutes: Route[] = [
  {
    path: '',
    component: ShoppingCartComponent,
  },
];
