import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesListRoutes } from './games-list.routes';

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, RouterModule.forChild(GamesListRoutes)],
})
export class GamesListModule {}
