import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
let ErrorInterceptorInterceptor = class ErrorInterceptorInterceptor {
    constructor(errorService) {
        this.errorService = errorService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(
        //desde el catch error capturo el error que me devuelve
        catchError((error) => {
            this.errorService.error.next(error);
            // el trhowerror genera el error que yo quiera
            return throwError(error.error.message);
        }));
    }
};
ErrorInterceptorInterceptor = __decorate([
    Injectable()
], ErrorInterceptorInterceptor);
export { ErrorInterceptorInterceptor };
//# sourceMappingURL=error-interceptor.interceptor.js.map