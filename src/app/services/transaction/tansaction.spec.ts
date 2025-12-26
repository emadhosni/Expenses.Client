import { TestBed } from '@angular/core/testing';

import { Tansaction } from './tansaction';

describe('Tansaction', () => {
  let service: Tansaction;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tansaction);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
