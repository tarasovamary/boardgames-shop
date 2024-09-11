import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../../../../core/store/cart/cart.selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  games$: Observable<Game[]> = this.store.select(selectCartItems);

  constructor(private store: Store){}

}
