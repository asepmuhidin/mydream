import { TestBed, inject } from '@angular/core/testing';

import { DosenService } from './dosen.service';

describe('DosenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DosenService]
    });
  });

  it('should be created', inject([DosenService], (service: DosenService) => {
    expect(service).toBeTruthy();
  }));
});
