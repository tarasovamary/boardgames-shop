import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GamesEffects } from '../../core/store/games/games.effects';
import { gamesReducer } from '../../core/store/games/games.reducer';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesListRoutes } from './games-list.routes';

@NgModule({
  declarations: [GamesListComponent, GameItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GamesListRoutes),
    StoreModule.forFeature('GAMES', gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
  ],
})
export class GamesListModule {}
