import { Component, Input } from '@angular/core';
import { Game } from '../../../../core/models/game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss',
})
export class GameItemComponent {
  @Input({ required: true }) game!: Game;

  constructor() {}
}
