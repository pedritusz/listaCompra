import { TestBed } from '@angular/core/testing';
import { LoginServiceService } from './login.service';
describe('LoginServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoginServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login-service.spec.js.map