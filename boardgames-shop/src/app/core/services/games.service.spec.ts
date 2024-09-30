import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Game } from '../models/game.model';
import { GamesService } from './games.service';

describe('GamesService', () => {
  let service: GamesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GamesService],
    });

    service = TestBed.inject(GamesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all games', () => {
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

    service.getAllGames().subscribe((games) => {
      expect(games.length).toBe(2);
      expect(games).toEqual(mockGames);
    });

    const req = httpMock.expectOne('http://localhost:8000/games');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });

  it('should fetch a game by id', () => {
    const mockGame: Game = {
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
    };

    service.getGameById(1).subscribe((game) => {
      expect(game).toEqual(mockGame);
    });

    const req = httpMock.expectOne('http://localhost:8000/games/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockGame);
  });
});
