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
});
