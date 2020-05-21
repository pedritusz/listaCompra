import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let ErrorService = class ErrorService {
    constructor() {
        this.error = new BehaviorSubject(undefined);
    }
};
ErrorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorService);
export { ErrorService };
//# sourceMappingURL=error.service.js.map