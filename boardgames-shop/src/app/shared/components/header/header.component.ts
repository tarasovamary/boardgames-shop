import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../core/models/game.model';
import { selectCartItems, selectCartTotalQuantity } from '../../../core/store/cart/cart.selector';
import { CartItem } from '../../../core/models/cart-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  totalQuantity$: Observable<number> = this.store.select(selectCartTotalQuantity);

  constructor(private store: Store) {}
}
