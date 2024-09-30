import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GamesListComponent } from './games-list.component';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesListComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
