import { TestBed } from '@angular/core/testing';

import { ListofitemServiceService } from './listofitem-service.service';

describe('ListofitemServiceService', () => {
  let service: ListofitemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofitemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
