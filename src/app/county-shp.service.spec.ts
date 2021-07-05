import { TestBed } from '@angular/core/testing';

import { CountyShpService } from './county-shp.service';

describe('CountyShpService', () => {
  let service: CountyShpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountyShpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
