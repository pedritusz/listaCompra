import { TestBed } from '@angular/core/testing';
import { MockServicesService } from './mock-services.service';
describe('MockServicesService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MockServicesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mock-services.service.spec.js.map