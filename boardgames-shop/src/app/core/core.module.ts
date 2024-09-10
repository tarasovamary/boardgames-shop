import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesService } from './services/games.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [GamesService],
})
export class CoreModule {}
