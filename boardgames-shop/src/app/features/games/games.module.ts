import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GamesEffects } from '../../core/store/games/games.effects';
import { gamesReducer } from '../../core/store/games/games.reducer';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesRoutes } from './games.routes';
import { GameDetailsComponent } from './components/game-details/game-details.component';

@NgModule({
  declarations: [GamesListComponent, GameItemComponent, GameDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GamesRoutes),
    StoreModule.forFeature('GAMES', gamesReducer),
    EffectsModule.forFeature([GamesEffects]),
  ],
})
export class GamesModule {}
