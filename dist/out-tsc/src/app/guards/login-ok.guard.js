import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoginOkGuard = class LoginOkGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.loginService.loginStore.loginResponse.ok) {
            return true;
        }
        this.router.navigate(['pruevas']);
    }
};
LoginOkGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginOkGuard);
export { LoginOkGuard };
//# sourceMappingURL=login-ok.guard.js.map