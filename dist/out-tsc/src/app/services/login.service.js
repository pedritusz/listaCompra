import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { TypeProjectEnum } from '../enums/typeAlert.enum';
import { BehaviorSubject } from 'rxjs';
class loginstoreClass {
    constructor() {
        this.error = new BehaviorSubject(undefined);
    }
}
let LoginServiceService = class LoginServiceService {
    constructor(http, router, errorService) {
        this.http = http;
        this.router = router;
        this.errorService = errorService;
        this.loginStore = new loginstoreClass();
        this.errorService.error.subscribe((error) => {
            this.loginStore.error.next({
                message: error ? error.error.message : undefined,
                type: TypeProjectEnum.danger
            });
            setTimeout(() => { this.errorService.error.next(undefined); }, 10000);
        });
    }
    ngOnInit() {
    }
    get loginButtonOptions() {
        return {
            action: 'continueLogin',
            text: 'continue',
            bgColor: 'yellow',
            textColor: 'white',
        };
    }
    /* mockoptions = {
      email:'pedritusz2@gmail.com',
      password:'123456',
    } */
    login(credentials) {
        this.http.post('http://localhost:3002/login', credentials).subscribe((response) => {
            if (response.ok) {
                this.loginStore.loginResponse = response;
                sessionStorage.setItem('userToken', response.token);
                sessionStorage.setItem('okUser', 'ok');
            }
        });
    }
    register(newUser) {
        //cambiar interfaz de repsuesta
        this.http.post('http://localhost:3002/users', newUser).subscribe((response) => {
            if (response.ok) {
                this.loginStore.loginResponse = response;
                sessionStorage.setItem('userToken', response.token);
                sessionStorage.setItem('okUser', 'ok');
                this.router.navigate(['dashboard']);
            }
        });
    }
    get continueCreateProfileButtonOptions() {
        return {
            action: 'creteProfile',
            text: 'continue',
            bgColor: 'yellow',
            textColor: 'white',
        };
    }
    get toLoginButtonOptions() {
        return {
            action: 'toLogin',
            text: 'To Login',
            bgColor: 'red',
            textColor: 'white',
        };
    }
    get toRegisterButtonOptions() {
        return {
            action: 'toRegister',
            text: 'register',
            bgColor: 'blue',
            textColor: 'white',
        };
    }
    get HorizontalScrollContainerOptions() {
        return {
            colors: {
                primary: 'rgb(238, 238, 128)',
                secondary: 'rgb(122, 122, 224)'
            }
        };
    }
    get AlertOptions() {
        return {
            message: 'error prueva',
            type: TypeProjectEnum.danger
        };
    }
};
LoginServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginServiceService);
export { LoginServiceService };
//# sourceMappingURL=login.service.js.map