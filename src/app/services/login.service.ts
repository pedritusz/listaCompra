import { Injectable, OnInit } from '@angular/core';
import { ButtonInterface } from '../interfaces/buttonInterface';
import { HorizontalScrollContainerInterface } from '../interfaces/horizontal-scroll-container';
import { AlerOptionsInterface } from '../interfaces/aler-options.interface';
import { TypeProjectEnum } from '../enums/typeAlert.enum';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';
import { ErrorFromErrorService } from '../interfaces/error-from-service';
import { BehaviorSubject } from 'rxjs';
import { UserPostClass } from '../classes/user-post.class';
import { environment } from 'src/environments/environment';
import { Environment } from '../enums/env.enum';
class LoginStoreClass {
  constructor() {

  }
  loginResponse: LoginResponse;
  error = new BehaviorSubject<AlerOptionsInterface>(undefined);

}
@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  loginStore = new LoginStoreClass();

  constructor(private http: HttpClient, private router: Router, private errorService: ErrorService) {

    this.errorService.error.subscribe((error: ErrorFromErrorService) => {
      this.loginStore.error.next(
        {
          message: error ? error.error.message : undefined,
          type: TypeProjectEnum.danger
        }
      );

      setTimeout(() => { this.errorService.error.next(undefined); }, 10000);

    });
  }

  get loginButtonOptions(): ButtonInterface {

    return {
      action: 'continueLogin',
      text: 'continue',
      bgColor: 'yellow',
      textColor: 'black',

    };

  }

  login(credentials): void {

    this.http.post(`${Environment.development}/login`, credentials).subscribe(

      (response: LoginResponse) => {

        if (response.ok) {
          this.loginStore.loginResponse = response;
          sessionStorage.setItem('userToken', response.token);
          sessionStorage.setItem('okUser', 'ok');
          this.router.navigate(['dashboard']);

        }

      }

    );

  }

  register(newUser: UserPostClass) {
    // cambiar interfaz de repsuesta

    this.http.post(`${Environment.development}/users`, newUser).subscribe((response: LoginResponse) => {
      console.log(response)

      if (response.ok) {

        this.loginStore.loginResponse = response;
        sessionStorage.setItem('userToken', response.token);
        sessionStorage.setItem('okUser', 'ok');

        this.router.navigate(['dashboard']);

      }

    });

  }

  get continueCreateProfileButtonOptions(): ButtonInterface {
    return {

      action: 'creteProfile',
      text: 'continue',
      bgColor: 'yellow',
      textColor: 'black',
    };
  }

  get toLoginButtonOptions(): ButtonInterface {
    return {

      action: 'toLogin',
      text: 'To Login',
      bgColor: 'red',
      textColor: 'black',
    };
  }

  get toRegisterButtonOptions(): ButtonInterface {

    return {

      action: 'toRegister',
      text: 'register',
      bgColor: 'blue',
      textColor: 'black',

    };
  }

  get HorizontalScrollContainerOptions(): HorizontalScrollContainerInterface {
    return {
      colors: {
        primary: 'white',
        secondary: 'white'
      }
    };

  }
  get AlertOptions(): AlerOptionsInterface {
    return {
      message: 'error prueva',
      type: TypeProjectEnum.danger
    };
  }




}
