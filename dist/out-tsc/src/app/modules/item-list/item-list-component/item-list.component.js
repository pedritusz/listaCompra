import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ItemListComponent = class ItemListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.widthCuantitylItem();
        this.setStock();
        this.itemName = this.ItemListOptions.name;
    }
    setStock() {
        this.inStock = this.ItemListOptions.stock;
        this.itemLack = this.ItemListOptions.minStock - this.inStock;
    }
    widthCuantitylItem() {
        if (this.ItemListOptions.stock > this.ItemListOptions.minStock) {
            this.inStockPercentage = '100%';
        }
        else {
            this.inStockPercentage = ((100 / this.ItemListOptions.minStock) * this.ItemListOptions.stock).toString() + '%';
        }
        this.inStockWidth = (100 / this.ItemListOptions.minStock) * this.ItemListOptions.stock;
    }
    onClick() {
        this.router.navigate([this.ItemListOptions.clickAction]);
    }
};
__decorate([
    Input()
], ItemListComponent.prototype, "ItemListOptions", void 0);
ItemListComponent = __decorate([
    Component({
        selector: 'app-item-list',
        templateUrl: './item-list.component.html',
        styleUrls: ['./item-list.component.scss']
    })
], ItemListComponent);
export { ItemListComponent };
//# sourceMappingURL=item-list.component.js.map