import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let mockStore: MockStore;

  const mockGame: Game = {
    id: '1',
    name: 'Cascadia',
    price: 45,
    images: [
      'https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__imagepagezoom/img/qYC5182c-pclsyojcMuyHR30lTA=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic5100691.jpg',
      'https://cf.geekdo-images.com/SmJK9M_S1fWC86qq39R5bg__imagepage/img/JLmb6M85Bm-6L4iQqyfaTuR4nA0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5472632.jpg',
      'https://cf.geekdo-images.com/kR7iTZOTfPl4SPoQa0Y2OA__imagepage/img/Wc8HzB3y2EWJLYw_MsP7zKeofnk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5656630.jpg',
      'https://cf.geekdo-images.com/mlKoCeBBxIXGBqd7pcKk4g__imagepage/img/xe2nkEF5uZqO7P7--wW5qzIrSU4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5656636.jpg',
    ],
    title: 'Create the most harmonious ecosystem as you puzzle together habitats and wildlife.',
    description:
      "Cascadia is a puzzly tile-laying and token-drafting game featuring the habitats and wildlife of the Pacific Northwest. In the game, you take turns building out your own terrain are and populating it with wildlife. You start with three hexagonal habitat tiles (with the five types of habitat in the game), and on a turn you choose a new habitat tile that's paired with a wildlife token, then place that tile next to your other ones and place the wildlife token on an appropriate habitat. (Each tile depicts 1-3 types of wildlife from the five types in the game, and you can place at most one tile on a habitat.) Four tiles are on display, with each tile being paired at random with a wildlife token, so you must make the best of what's available — unless you have a nature token to spend so that you can pick your choice of each item. Ideally you can place habitat tiles to create matching terrain that reduces fragmentation and creates wildlife corridors, mostly because you score for the largest area of each type of habitat at game's end, with a bonus if your group is larger than each other player's. At the same time, you want to place wildlife tokens so that you can maximize the number of points scored by them, with the wildlife goals being determined at random by one of the four scoring cards for each type of wildlife. Maybe hawks want to be separate from other hawks, while foxes want lots of different animals surrounding them and bears want to be in pairs. Can you make it happen?",
    yearpublished: 2021,
    rating: '7.9',
    designer: 'Randy Flynn',
    minplayers: 1,
    maxplayers: 4,
    playingtime: 45,
    minage: 10,
    type: ['Abstract', 'Family'],
    category: ['Puzzle', 'Animals', 'Environmental'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.game = mockGame;
    mockStore = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch removeGameFromCart action with correct gameId', () => {
    const gameId = '123';
    spyOn(mockStore, 'dispatch');

    component.removeFromCart(gameId);

    expect(mockStore.dispatch).toHaveBeenCalledWith(CartActions.removeGameFromCart({ gameId }));
  });
});
