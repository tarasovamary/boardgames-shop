import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import * as GamesActions from '../../../../core/store/games/games.actions';
import { selectAllGames } from '../../../../core/store/games/games.selectors';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  games$: Observable<Game[]> = this.store.select(selectAllGames);

  constructor(private store: Store) {
    this.store.dispatch(GamesActions.loadGames());
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
