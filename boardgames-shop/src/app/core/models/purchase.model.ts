import { Game } from './game.model';

export interface Purchase {
  game: Game;
  quantity: number;
}
