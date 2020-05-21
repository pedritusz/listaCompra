import { TestBed } from '@angular/core/testing';
import { ErrorService } from './error.service';
describe('ErrorService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ErrorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=error.service.spec.js.map