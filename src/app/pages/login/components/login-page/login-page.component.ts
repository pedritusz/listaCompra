import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from '../../../../services/login.service'
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';
import { LoginFormComponent } from 'src/app/modules/login-form/module/login-form/login-form/login-form.component';
import { ErrorService } from 'src/app/services/error.service';


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
  continueCreateProfileOptions:ButtonInterface = this.loginService.continueCreateProfileButtonOptions;
  toLoginButtonOptions:ButtonInterface =  this.loginService.toLoginButtonOptions;
  horizontalScrollContainerOptions:HorizontalScrollContainerInterface = this.loginService.HorizontalScrollContainerOptions;
  error;

  ngOnInit(): void {
    //subcripcion al error que obtiene el login service
    this.loginService.loginStore.error.subscribe((error)=>{
      this.error = error
    })
  }

//capturo la accion del boton component
  public buttonCmp($event){
    switch ($event) {
      case 'continueLogin':
      this.submit()
        break;

        case 'toRegister':
        this.hcc.toSecondary()
          break;

        case 'toLogin':
        this.hcc.toSecondary()
          break;        
        
        case 'creteProfile':
          this.creteProfile()
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

  creteProfile(){
   console.log('create user') 
  }
}
