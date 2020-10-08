import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTeamDetailsComponent } from './tournament-team-details.component';

describe('TournamentTeamDetailsComponent', () => {
  let component: TournamentTeamDetailsComponent;
  let fixture: ComponentFixture<TournamentTeamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentTeamDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
