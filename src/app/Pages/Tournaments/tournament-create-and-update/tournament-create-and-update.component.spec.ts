import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCreateAndUpdateComponent } from './tournament-create-and-update.component';

describe('TournamentCreateAndUpdateComponent', () => {
  let component: TournamentCreateAndUpdateComponent;
  let fixture: ComponentFixture<TournamentCreateAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentCreateAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCreateAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
