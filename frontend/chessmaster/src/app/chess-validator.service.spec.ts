import { TestBed } from '@angular/core/testing';

import { ChessValidatorService } from './chess-validator.service';

describe('ChessValidatorService', () => {
  let service: ChessValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
