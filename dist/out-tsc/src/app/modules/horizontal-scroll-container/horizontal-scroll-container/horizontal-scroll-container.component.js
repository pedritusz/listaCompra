import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let HorizontalScrollContainerComponent = class HorizontalScrollContainerComponent {
    constructor() {
        this.status = 'initial';
    }
    ngOnInit() {
    }
    toSecondary() {
        switch (this.status) {
            case 'initial':
                this.status = 'secondary';
                break;
            case 'secondary':
                this.status = 'primary';
                break;
            case 'primary':
                this.status = 'secondary';
                break;
            default:
                break;
        }
    }
};
__decorate([
    Input()
], HorizontalScrollContainerComponent.prototype, "hscOptions", void 0);
HorizontalScrollContainerComponent = __decorate([
    Component({
        selector: 'app-horizontal-scroll-container',
        templateUrl: './horizontal-scroll-container.component.html',
        styleUrls: ['./horizontal-scroll-container.component.scss']
    })
], HorizontalScrollContainerComponent);
export { HorizontalScrollContainerComponent };
//# sourceMappingURL=horizontal-scroll-container.component.js.map