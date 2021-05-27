import { TestBed } from '@angular/core/testing';

import { ResolveruService } from './resolveru.service';

describe('ResolveruService', () => {
  let service: ResolveruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
