import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';
import * as GamesActions from './games.actions';
import { GamesEffects } from './games.effects';

describe('GamesEffects', () => {
  let actions$: Observable<any>;
  let effects: GamesEffects;
  let gamesService: jasmine.SpyObj<GamesService>;

  beforeEach(() => {
    const gamesServiceSpy = jasmine.createSpyObj('GamesService', ['getAllGames']);

    TestBed.configureTestingModule({
      providers: [
        GamesEffects,
        provideMockActions(() => actions$),
        { provide: GamesService, useValue: gamesServiceSpy },
      ],
    });

    effects = TestBed.inject(GamesEffects);
    gamesService = TestBed.inject(GamesService) as jasmine.SpyObj<GamesService>;
  });

  it('should dispatch loadGamesSuccess on successful games load', () => {
    const mockGames: Game[] = [
      {
        id: '1',
        name: 'Game 1',
        price: 20,
        images: [],
        title: 'Title 1',
        description: 'Desc 1',
        yearpublished: 2020,
        rating: '4.5',
        designer: 'Designer 1',
        minplayers: 2,
        maxplayers: 4,
        playingtime: 60,
        minage: 10,
        type: [],
        category: [],
      },
      {
        id: '2',
        name: 'Game 2',
        price: 30,
        images: [],
        title: 'Title 2',
        description: 'Desc 2',
        yearpublished: 2021,
        rating: '4.8',
        designer: 'Designer 2',
        minplayers: 3,
        maxplayers: 5,
        playingtime: 90,
        minage: 12,
        type: [],
        category: [],
      },
    ];

    // Action that triggers games to load
    const action = GamesActions.loadGames();

    // Expected result - successful loading of games
    const completion = GamesActions.loadGamesSuccess({ games: mockGames });

    // Mock gamesService is returns an array of games
    gamesService.getAllGames.and.returnValue(of(mockGames));

    // Pass the action to the stream
    actions$ = of(action);

    effects.loadBoardGames$.subscribe((result) => {
      expect(result).toEqual(completion); // Check that the result is equal to the expected action
    });
  });

  it('should dispatch loadGamesFailure on error', () => {
    const error = 'Error loading games';
    const action = GamesActions.loadGames();
    const completion = GamesActions.loadGamesFailure({ error });

    gamesService.getAllGames.and.returnValue(throwError(() => error));

    actions$ = of(action);

    effects.loadBoardGames$.subscribe((result) => {
      expect(result).toEqual(completion);
    });
  });
});
