import { Route } from '@angular/router';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesListComponent } from './components/games-list/games-list.component';

export const GamesRoutes: Route[] = [
  {
    path: '',
    component: GamesListComponent,
  },
  { path: 'games/:id', component: GameDetailsComponent },
];
