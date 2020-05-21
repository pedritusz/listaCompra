import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PruevasComponent } from './pruevas.component';
const routes = [
    {
        path: '',
        component: PruevasComponent
    }
];
let PruevasRouterModule = class PruevasRouterModule {
};
PruevasRouterModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PruevasRouterModule);
export { PruevasRouterModule };
//# sourceMappingURL=pruevas.routes.js.map