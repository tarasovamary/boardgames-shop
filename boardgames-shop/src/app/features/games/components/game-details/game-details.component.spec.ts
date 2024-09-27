import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { GameDetailsComponent } from './game-details.component';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [GameDetailsComponent],
      providers: [
        provideMockStore({}),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => {
                if (key === 'id') {
                  return 'test-id';
                }
                return null;
              },
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
