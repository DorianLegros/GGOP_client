import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCreationAndUpdateComponent } from './team-creation-and-update.component';

describe('TeamCreationAndUpdateComponent', () => {
  let component: TeamCreationAndUpdateComponent;
  let fixture: ComponentFixture<TeamCreationAndUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCreationAndUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCreationAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
