import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginRouterModule } from './login.routes';
import { LoginFormModule } from 'src/app/modules/login-form/module/login-form/login-form.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {AlertMessageModule} from '../../modules/alert-message/alert-message-module/alert-message/alert-message.module';
import {ButtonModule} from '../../modules/button/button-module/button.module';
import {HorizontaScrollContainerModule} from '../../modules/horizontal-scroll-container/horizontal-scroll-container-module/horizonta-scroll-container/horizonta-scroll-container.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],

  imports: [
    CommonModule,
    loginRouterModule,
    LoginFormModule,
    AlertMessageModule,
    ButtonModule,
    HorizontaScrollContainerModule
  ],
  exports:[
    LoginPageComponent
    
  ]
  
})
export class LoginModule { }
