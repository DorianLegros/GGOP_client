import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAlgorithmComponent } from './team-algorithm.component';

describe('TeamAlgorithmComponent', () => {
  let component: TeamAlgorithmComponent;
  let fixture: ComponentFixture<TeamAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
