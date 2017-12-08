import { TestBed, inject } from '@angular/core/testing';

import { TuijianService } from './tuijian.service';

describe('TuijianService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuijianService]
    });
  });

  it('should be created', inject([TuijianService], (service: TuijianService) => {
    expect(service).toBeTruthy();
  }));
});
