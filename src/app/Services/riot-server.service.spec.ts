import { TestBed } from '@angular/core/testing';

import { RiotServerService } from './riot-server.service';

describe('RiotServerService', () => {
  let service: RiotServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiotServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
