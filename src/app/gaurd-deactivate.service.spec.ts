import { TestBed } from '@angular/core/testing';

import { GaurdDeactivateService } from './gaurd-deactivate.service';

describe('GaurdDeactivateService', () => {
  let service: GaurdDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaurdDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
