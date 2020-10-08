import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileHonorComponent } from './user-profile-honor.component';

describe('UserProfileHonorComponent', () => {
  let component: UserProfileHonorComponent;
  let fixture: ComponentFixture<UserProfileHonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileHonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileHonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
