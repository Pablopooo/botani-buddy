import { TestBed } from '@angular/core/testing';

import { PlantanuevaService } from './plantanueva.service';

describe('PlantanuevaService', () => {
  let service: PlantanuevaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantanuevaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
