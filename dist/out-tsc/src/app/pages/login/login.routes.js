import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        component: LoginPageComponent
    }
];
let loginRouterModule = class loginRouterModule {
};
loginRouterModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], loginRouterModule);
export { loginRouterModule };
//# sourceMappingURL=login.routes.js.map