import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { LoginServiceService } from '../../../../services/login.service';
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';
import { ErrorService } from 'src/app/services/error.service';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { AlerOptionsInterface } from 'src/app/interfaces/aler-options.interface';
import { UserPostClass } from 'src/app/classes/user-post.class';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild(HorizontalScrollContainerComponent) hcc: HorizontalScrollContainerComponent;

  constructor(private loginService: LoginServiceService, private fb: FormBuilder, private errorService: ErrorService) { }

  continueLoginButtonOptions: ButtonInterface = this.loginService.loginButtonOptions;
  toRegisterButtonOptions: ButtonInterface = this.loginService.toRegisterButtonOptions;
  continueCreateProfileOptions: ButtonInterface = this.loginService.continueCreateProfileButtonOptions;
  toLoginButtonOptions: ButtonInterface = this.loginService.toLoginButtonOptions;
  horizontalScrollContainerOptions: HorizontalScrollContainerInterface = this.loginService.HorizontalScrollContainerOptions;
  error: AlerOptionsInterface;
  loginForm = this.fb.group({

    email: ['', Validators.required],
    password: ['', Validators.required]

  });
  registerForm = this.fb.group({

    name: ['', [Validators.required, Validators.max(16), Validators.min(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(6)]],
    confirmPassword: ['', Validators.required],

  });

  ngOnInit(): void {
    // subcripcion al error que obtiene el login service
    this.loginService.loginStore.error.subscribe((error) => {
      this.error = error;

    });
  }


  // capturo la accion del boton component
  public buttonCmp($event) {

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
      if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
        this.loginService.register(new UserPostClass(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password));
      }  else {
        this.errorService.error.next({error: {message: 'passwords do not match', ok: false }} );

      }
    }

    console.log(this.registerForm);
    console.log('contraseñas iguales', this.registerForm.value.password === this.registerForm.value.confirmPassword, this.registerForm.value.password, this.registerForm.value.confirmPassword);
    // console.log( 'register form validator', this.registerForm.valid );

  }

  equalPasswords(password = this.registerForm.value.password, control: AbstractControl) {
    let error = null;
    if (control.value !== password) {
      error = { ...error, equalError: 'this password in not equal' };
    }
    return error;
  }


}

