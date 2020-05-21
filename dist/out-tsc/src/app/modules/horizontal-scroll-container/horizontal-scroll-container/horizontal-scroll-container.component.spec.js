import { async, TestBed } from '@angular/core/testing';
import { HorizontalScrollContainerComponent } from './horizontal-scroll-container.component';
describe('HorizontalScrollContainerComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HorizontalScrollContainerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HorizontalScrollContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horizontal-scroll-container.component.spec.js.map