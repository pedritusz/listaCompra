import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.actionEmit = new EventEmitter();
    }
    ngOnInit() {
        this.setWidth();
        this.text = this.buttonOptions.text;
        this.action = this.buttonOptions.action;
        this.setBgColor();
        this.setTextColor();
    }
    actionClick($event) {
        this.actionEmit.emit(this.action);
    }
    setWidth() {
        this.width = this.buttonOptions.width ? this.buttonOptions.width + '%' : '80%';
    }
    setBgColor() {
        this.backgroundColor = this.buttonOptions.bgColor ? this.buttonOptions.bgColor : 'yellow';
    }
    setTextColor() {
        this.textColor = this.buttonOptions.textColor ? this.buttonOptions.textColor : 'black';
    }
};
__decorate([
    Input()
], ButtonComponent.prototype, "buttonOptions", void 0);
__decorate([
    Output()
], ButtonComponent.prototype, "actionEmit", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'app-button',
        templateUrl: './button.component.html',
        styleUrls: ['./button.component.scss']
    })
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map