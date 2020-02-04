import { TestBed } from '@angular/core/testing';

import { TestDataStoreService } from './test-data-store.service';

describe('TestDataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestDataStoreService = TestBed.get(TestDataStoreService);
    expect(service).toBeTruthy();
  });
});
