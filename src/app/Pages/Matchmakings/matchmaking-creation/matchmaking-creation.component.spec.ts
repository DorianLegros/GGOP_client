import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingCreationComponent } from './matchmaking-creation.component';

describe('MatchmakingCreationComponent', () => {
  let component: MatchmakingCreationComponent;
  let fixture: ComponentFixture<MatchmakingCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmakingCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
