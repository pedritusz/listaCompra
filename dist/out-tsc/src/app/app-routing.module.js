import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginOkGuard } from './guards/login-ok.guard';
const routes = [
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [LoginOkGuard] },
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/module/dashboard.module').then(m => m.DashboardModule) },
    { path: 'pruevas', loadChildren: () => import('./documentation/pruevas/pruevas.module').then(m => m.PruevasModule) },
    { path: '', loadChildren: () => import('./documentation/pruevas/pruevas.module').then(m => m.PruevasModule) },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map