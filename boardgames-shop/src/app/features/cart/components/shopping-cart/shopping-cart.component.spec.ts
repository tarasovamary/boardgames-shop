import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
