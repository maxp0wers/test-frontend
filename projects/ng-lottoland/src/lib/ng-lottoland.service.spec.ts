import { TestBed } from '@angular/core/testing';

import { NgLottolandService } from './ng-lottoland.service';

describe('NgLottolandService', () => {
  let service: NgLottolandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLottolandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
