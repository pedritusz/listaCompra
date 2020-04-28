import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from '../../../../services/login-service.service'
import { HorizontalScrollContainerComponent } from 'src/app/modules/horizontal-scroll-container/horizontal-scroll-container/horizontal-scroll-container.component';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';
import { ButtonInterface } from 'src/app/interfaces/buttonInterface';
import { AlerOptionsInterface } from 'src/app/interfaces/aler-options.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild(HorizontalScrollContainerComponent)hcc:HorizontalScrollContainerComponent;
  
  constructor(private loginService:LoginServiceService) { }

  continueLoginButtonOptions: ButtonInterface = this.loginService.loginButtonOptions;
  toRegisterButtonOptions:ButtonInterface = this.loginService.toRegisterButtonOptions;
  horizontalScrollContainerOptions:HorizontalScrollContainerInterface = this.loginService.HorizontalScrollContainerOptions;
  alertOptions:AlerOptionsInterface = this.loginService.AlertOptions

  ngOnInit(): void {
  }

  public buttonCmp($event){
    switch ($event) {
      case 'continueLogin':
        console.log('continue')
        break;

        case 'toRegister':
          console.log('register')
        this.hcc.toSecondary()
          break;
    
      default:
        break;
    }
  }


}
