import { TestBed } from '@angular/core/testing';

import { AppsyncClientService } from './appsync-client.service';

describe('AppsyncClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsyncClientService = TestBed.get(AppsyncClientService);
    expect(service).toBeTruthy();
  });
});
