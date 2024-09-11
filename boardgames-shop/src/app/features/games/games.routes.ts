import { Route } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';

export const GamesRoutes: Route[] = [
  {
    path: '',
    component: GamesListComponent,
  },
];
