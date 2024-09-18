import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, filter, switchMap, takeUntil } from 'rxjs';
import { Game } from '../../../../core/models/game.model';
import { selectGameById } from '../../../../core/store/games/games.selectors';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.scss',
})
export class GameDetailsComponent implements OnInit {
  game$!: Observable<Game | undefined>;
  routeId$!: Observable<string>;

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.routeId$ = this.activatedRoute.paramMap.pipe(switchMap((params) => params.getAll('id')));

    this.routeId$
      .pipe(
        takeUntil(this.unsubscribeAll),
        filter((id) => !!id),
      )
      .subscribe((id) => {
        this.game$ = this.store.select(selectGameById(id));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
