import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from '../../../../services/login-service.service'
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';
import { AlerOptionsInterface } from 'src/app/interfaces/aler-options.interface';
import { LoginFormComponent } from 'src/app/modules/login-form/module/login-form/login-form/login-form.component';
import { ErrorService } from 'src/app/services/error.service';
import { ErrorFromService } from 'src/app/interfaces/error-from-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild(HorizontalScrollContainerComponent)hcc:HorizontalScrollContainerComponent;
  @ViewChild(LoginFormComponent)form:LoginFormComponent;
  
  constructor(private loginService:LoginServiceService,private errorService:ErrorService ) { }

  continueLoginButtonOptions: ButtonInterface = this.loginService.loginButtonOptions;
  toRegisterButtonOptions:ButtonInterface = this.loginService.toRegisterButtonOptions;
  horizontalScrollContainerOptions:HorizontalScrollContainerInterface = this.loginService.HorizontalScrollContainerOptions;
  error;

  ngOnInit(): void {
    this.loginService.loginStore.error.subscribe((error)=>{
      console.log('error')
      this.error = error
    })
  }

  public buttonCmp($event){
    switch ($event) {
      case 'continueLogin':
      this.submit()
      // this.loginService.login()
        break;

        case 'toRegister':
          console.log('register')
        this.hcc.toSecondary()
          break;
    
      default:
        break;
    }
  }
  submit(){
    if(this.form.loginForm.valid){
      this.loginService.login(this.form.loginForm.value)
    }


}
}
