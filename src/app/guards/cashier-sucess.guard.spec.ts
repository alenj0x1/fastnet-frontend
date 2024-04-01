import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cashierSucessGuard } from './cashier-sucess.guard';

describe('cashierSucessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cashierSucessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
