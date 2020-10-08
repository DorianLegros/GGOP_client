import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmakingsListComponent } from './matchmakings-list.component';

describe('MatchmakingsListComponent', () => {
  let component: MatchmakingsListComponent;
  let fixture: ComponentFixture<MatchmakingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchmakingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmakingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
