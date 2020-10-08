import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTeamsComponent } from './user-profile-teams.component';

describe('UserProfileTeamsComponent', () => {
  let component: UserProfileTeamsComponent;
  let fixture: ComponentFixture<UserProfileTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
