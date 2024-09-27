import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Game } from '../../../../core/models/game.model';
import * as CartActions from '../../../../core/store/cart/cart.actions';
import * as PurchasesActions from '../../../../core/store/purchase/purchase.actions';
import { OrderCheckoutComponent } from './order-checkout.component';

describe('OrderCheckoutComponent', () => {
  let component: OrderCheckoutComponent;
  let fixture: ComponentFixture<OrderCheckoutComponent>;
  let mockStore: MockStore;
  let mockRouter: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, ReactiveFormsModule],
      declarations: [OrderCheckoutComponent],
      providers: [
        provideMockStore({}),
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCheckoutComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockRouter = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch clearCart action', () => {
    spyOn(mockStore, 'dispatch');

    component.submitOrder();

    expect(mockStore.dispatch).toHaveBeenCalledWith(CartActions.clearCart());
  });

  it('should navigate to games', () => {
    component.submitOrder();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['./games']);
  });

  it('should dispatch addPurchases action with correct purchases', () => {
    const mockPurchases: Game[] = [
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

    spyOn(mockStore, 'dispatch');

    component.addPurchases(mockPurchases);

    expect(mockStore.dispatch).toHaveBeenCalledWith(PurchasesActions.addPurchases({ purchases: mockPurchases }));
  });
});
