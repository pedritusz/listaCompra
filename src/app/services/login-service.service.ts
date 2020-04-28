import { Injectable } from '@angular/core';
import { ButtonInterface } from '../interfaces/buttonInterface';
import { ButtonComponent } from '../modules/button/button-component/button.component';
import { HorizontalScrollContainerInterface } from '../interfaces/horizontal-scroll-container';
import { AlerOptionsInterface } from '../interfaces/aler-options.interface';
import { TypeProjectEnum } from '../enums/typeAlert.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  get loginButtonOptions():ButtonInterface{

    return {
      action:'continueLogin',
      text:'continue',
      bgColor:'yellow',
      textColor:'white',

    }

  }

  get toRegisterButtonOptions ():ButtonInterface{

    return {

      action:'toRegister',
      text:'register',
      bgColor:'blue',
      textColor:'white',
  
    }
    
  }

  get  HorizontalScrollContainerOptions():HorizontalScrollContainerInterface {
    return {
      colors:{
        primary:'rgb(238, 238, 128)',
        secondary:'rgb(122, 122, 224)'
      }
    }

}
  get AlertOptions():AlerOptionsInterface{
    return {
      message:'error prueva',
      type:TypeProjectEnum.danger
    }
  }


}
