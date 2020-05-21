import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { QuantityTypeEnum } from '../enums/quantityTypeEnum';
let MockServicesService = class MockServicesService {
    constructor() {
        this.itemList = {
            clickAction: '/prueva',
            minStock: 25,
            stock: 12,
            name: 'prueba',
            cuantityType: QuantityTypeEnum.units,
        };
        this.buttonMock = {
            action: 'guapa',
            bgColor: 'green',
            text: 'irache',
            width: '80',
            textColor: 'yellow'
        };
    }
};
MockServicesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MockServicesService);
export { MockServicesService };
//# sourceMappingURL=mock-services.service.js.map