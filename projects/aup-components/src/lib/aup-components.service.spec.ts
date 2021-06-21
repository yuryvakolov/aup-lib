import { TestBed } from '@angular/core/testing';

import { AupComponentsService } from './aup-components.service';

describe('AupComponentsService', () => {
  let service: AupComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AupComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
