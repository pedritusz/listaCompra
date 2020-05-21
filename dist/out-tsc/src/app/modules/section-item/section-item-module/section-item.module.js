import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionItemComponent } from '../section-item-component/section-item.component';
import { RouterModule } from '@angular/router';
let SectionItemModule = class SectionItemModule {
};
SectionItemModule = __decorate([
    NgModule({
        declarations: [
            SectionItemComponent
        ],
        imports: [
            CommonModule,
            RouterModule
        ],
        exports: [
            SectionItemComponent
        ]
    })
], SectionItemModule);
export { SectionItemModule };
//# sourceMappingURL=section-item.module.js.map