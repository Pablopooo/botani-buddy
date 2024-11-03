import { TestBed } from '@angular/core/testing';

import { PerenualService } from './perenual.service';

describe('PerenualService', () => {
  let service: PerenualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerenualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
