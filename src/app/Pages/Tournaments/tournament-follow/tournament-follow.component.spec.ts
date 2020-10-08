import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFollowComponent } from './tournament-follow.component';

describe('TournamentFollowComponent', () => {
  let component: TournamentFollowComponent;
  let fixture: ComponentFixture<TournamentFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
