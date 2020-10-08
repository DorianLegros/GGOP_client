import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsMyListComponent } from './tournaments-my-list.component';

describe('TournamentsMyListComponent', () => {
  let component: TournamentsMyListComponent;
  let fixture: ComponentFixture<TournamentsMyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsMyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
