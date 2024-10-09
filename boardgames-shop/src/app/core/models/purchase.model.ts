import { Game } from './game.model';

export interface Purchase {
  game: Game;
  quantity: number;
}

export interface Order {
  id: string;
  date: Date;
  purchase: Purchase[];
  totalPrice: number;
}
