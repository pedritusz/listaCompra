import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { TypeProjectEnum } from '../../enums/typeAlert.enum';
let PruevasComponent = class PruevasComponent {
    constructor(itemListMock) {
        this.itemListMock = itemListMock;
        this.alertOptions = {
            message: 'success alert',
            type: TypeProjectEnum.success
        };
        this.alertOptions2 = {
            message: 'danger alert',
            type: TypeProjectEnum.danger
        };
        this.alertOptions3 = {
            message: 'warning alert',
            type: TypeProjectEnum.warning
        };
        this.optionSectionmock = {
            background: 'blue',
            action: 'login',
            title: 'nevera'
        };
    }
    ngOnInit() {
    }
    butonCmp($event) {
    }
    change() {
        this.hcc.toSecondary();
    }
};
__decorate([
    ViewChild(HorizontalScrollContainerComponent)
], PruevasComponent.prototype, "hcc", void 0);
PruevasComponent = __decorate([
    Component({
        selector: 'app-pruevas',
        templateUrl: './pruevas.component.html',
        styleUrls: ['./pruevas.component.scss']
    })
], PruevasComponent);
export { PruevasComponent };
//# sourceMappingURL=pruevas.component.js.map