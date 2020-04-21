import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { loginRouterModule } from './login.routes';
import {HorizontalScrollContainerComponent} from '../../components/horizontal-scroll-container/horizontal-scroll-container.component'
import {ButtonComponent } from '../../components/button/button.component'


@NgModule({
  declarations: [
    LoginPageComponent,
    HorizontalScrollContainerComponent,
    ButtonComponent

  ],
  imports: [
    CommonModule,
    loginRouterModule
  ]
})
export class LoginModule { }
