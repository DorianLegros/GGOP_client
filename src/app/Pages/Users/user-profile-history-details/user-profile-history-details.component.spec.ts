import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileHistoryDetailsComponent } from './user-profile-history-details.component';

describe('UserProfileHistoryDetailsComponent', () => {
  let component: UserProfileHistoryDetailsComponent;
  let fixture: ComponentFixture<UserProfileHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
