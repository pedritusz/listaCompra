import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRouterModule } from './login.routes';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AlertMessageModule } from '../../modules/alert-message/alert-message-module/alert-message/alert-message.module';
import { ButtonModule } from '../../modules/button/button-module/button.module';
import { HorizontaScrollContainerModule } from '../../modules/horizontal-scroll-container/horizontal-scroll-container-module/horizonta-scroll-container/horizonta-scroll-container.module';
import { LoginServiceService } from 'src/app/services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [
            LoginPageComponent
        ],
        imports: [
            ReactiveFormsModule,
            CommonModule,
            loginRouterModule,
            AlertMessageModule,
            ButtonModule,
            HorizontaScrollContainerModule
        ],
        exports: [
            LoginPageComponent
        ],
        providers: [
            LoginServiceService
        ]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map