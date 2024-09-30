import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { OrderCheckoutComponent } from '../order-checkout/order-checkout.component';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let mockStore: MockStore;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [provideMockStore({}), { provide: MatDialog, useValue: mockDialog }],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the order checkout dialog', () => {
    component.openOrderCheckoutDialog();

    expect(mockDialog.open).toHaveBeenCalledWith(OrderCheckoutComponent);
  });

  it('should return id of the item when id exists', () => {
    const item = { id: '123', name: 'Test Game' };
    const index = 0;

    const result = component.trackByFn(index, item);

    expect(result).toBe('123');
  });

  it('should return the index when item id does not exist', () => {
    const item = { name: 'Test Game' }; // no id in the item
    const index = 2;

    const result = component.trackByFn(index, item);

    expect(result).toBe(index);
  });
});
