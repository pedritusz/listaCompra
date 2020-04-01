import { TestBed } from '@angular/core/testing';

import { MockServicesService } from './mock-services.service';

describe('MockServicesService', () => {
  let service: MockServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
