import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingDetailsComponent } from './matchmaking-details.component';

describe('MatchmakingDetailsComponent', () => {
  let component: MatchmakingDetailsComponent;
  let fixture: ComponentFixture<MatchmakingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmakingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
