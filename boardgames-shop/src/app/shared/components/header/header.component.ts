import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../core/models/game.model';
import { selectCartItems } from '../../../core/store/cart/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartItems$: Observable<Game[]> = this.store.select(selectCartItems);

  constructor(private store: Store) {}
}
