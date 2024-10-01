import { CartItem } from './cart-item.model';
import { Game } from './game.model';

export interface Purchase extends CartItem {
  date?: Date;
}
