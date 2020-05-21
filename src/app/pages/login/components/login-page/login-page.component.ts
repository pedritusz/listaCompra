import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from '../../../../services/login.service';
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';
import { ErrorService } from 'src/app/services/error.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild(HorizontalScrollContainerComponent)hcc: HorizontalScrollContainerComponent;

  constructor( private loginService: LoginServiceService,  private fb: FormBuilder ) { }

  continueLoginButtonOptions: ButtonInterface = this.loginService.loginButtonOptions;
  toRegisterButtonOptions: ButtonInterface = this.loginService.toRegisterButtonOptions;
  continueCreateProfileOptions: ButtonInterface = this.loginService.continueCreateProfileButtonOptions;
  toLoginButtonOptions: ButtonInterface =  this.loginService.toLoginButtonOptions;
  horizontalScrollContainerOptions: HorizontalScrollContainerInterface = this.loginService.HorizontalScrollContainerOptions;
  error;
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

    }

    console.log(this.registerForm);
    console.log( 'contraseñas iguales', this.registerForm.value.password === this.registerForm.value.confirmPassword );
   // console.log( 'register form validator', this.registerForm.valid );

  }


}

