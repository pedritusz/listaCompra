import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SectionItemComponent = class SectionItemComponent {
    constructor(ruter) {
        this.ruter = ruter;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], SectionItemComponent.prototype, "options", void 0);
SectionItemComponent = __decorate([
    Component({
        selector: 'app-section-item',
        templateUrl: './section-item.component.html',
        styleUrls: ['./section-item.component.scss']
    })
], SectionItemComponent);
export { SectionItemComponent };
//# sourceMappingURL=section-item.component.js.map