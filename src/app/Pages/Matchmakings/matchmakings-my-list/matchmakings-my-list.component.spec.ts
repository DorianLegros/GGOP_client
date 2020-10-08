import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingsMyListComponent } from './matchmakings-my-list.component';

describe('MatchmakingsMyListComponent', () => {
  let component: MatchmakingsMyListComponent;
  let fixture: ComponentFixture<MatchmakingsMyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmakingsMyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingsMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
