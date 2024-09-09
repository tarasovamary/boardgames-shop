import { Route } from "@angular/router";
import { GamesListComponent } from "./components/games-list/games-list.component";

export const GamesListRoutes: Route[] = [
    {
      path: '',
      component: GamesListComponent,
    },
  ];