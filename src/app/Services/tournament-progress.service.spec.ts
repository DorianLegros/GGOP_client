import { TestBed } from '@angular/core/testing';

import { TournamentProgressService } from './tournament-progress.service';

describe('TournamentProgressService', () => {
  let service: TournamentProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
