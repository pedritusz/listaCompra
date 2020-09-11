import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { Validators } from '@angular/forms';
let LoginPageComponent = class LoginPageComponent {
    constructor(loginService, errorService, fb) {
        this.loginService = loginService;
        this.errorService = errorService;
        this.fb = fb;
        this.continueLoginButtonOptions = this.loginService.loginButtonOptions;
        this.toRegisterButtonOptions = this.loginService.toRegisterButtonOptions;
        this.continueCreateProfileOptions = this.loginService.continueCreateProfileButtonOptions;
        this.toLoginButtonOptions = this.loginService.toLoginButtonOptions;
        this.horizontalScrollContainerOptions = this.loginService.HorizontalScrollContainerOptions;
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.registerForm = this.fb.group({
            name: ['', [Validators.required, Validators.max(16), Validators.min(6)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.min(6)]],
            confirmPassword: ['', Validators.required],
        });
    }
    ngOnInit() {
        //subcripcion al error que obtiene el login service
        this.loginService.loginStore.error.subscribe((error) => {
            this.error = error;
        });
    }
    //capturo la accion del boton component
    buttonCmp($event) {
        switch ($event) {
            case 'continueLogin':
                this.submit();
                break;
            case 'toRegister':
                this.hcc.toSecondary();
                break;
            case 'toLogin':
                this.hcc.toSecondary();
                break;
            case 'creteProfile':
                this.creteProfile();
                break;
            default:
                break;
        }
    }
    submit() {
        if (this.loginForm.valid) {
            this.loginService.login(this.loginForm.value);
        }
    }
    creteProfile() {
        if (this.registerForm.valid) {
        }
    }
};
__decorate([
    ViewChild(HorizontalScrollContainerComponent)
], LoginPageComponent.prototype, "hcc", void 0);
LoginPageComponent = __decorate([
    Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.scss']
    })
], LoginPageComponent);
export { LoginPageComponent };
//# sourceMappingURL=login-page.component.js.map