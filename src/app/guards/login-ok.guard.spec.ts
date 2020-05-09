import { TestBed } from '@angular/core/testing';

import { LoginOkGuard } from './login-ok.guard';

describe('LoginOkGuard', () => {
  let guard: LoginOkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginOkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
