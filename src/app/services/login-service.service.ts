import { Injectable, OnInit } from '@angular/core';
import { ButtonInterface } from '../interfaces/buttonInterface';
import { HorizontalScrollContainerInterface } from '../interfaces/horizontal-scroll-container';
import { AlerOptionsInterface } from '../interfaces/aler-options.interface';
import { TypeProjectEnum } from '../enums/typeAlert.enum';
import {HttpClient} from '@angular/common/http'
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';
import { ErrorFromService } from '../interfaces/error-from-service';
import { BehaviorSubject } from 'rxjs';
class loginstoreClass {
  constructor() {
    
  }
  loginResponse:LoginResponse;
  error = new BehaviorSubject<AlerOptionsInterface>(undefined);

}
@Injectable({
  providedIn: 'root'
})

export class LoginServiceService implements OnInit {
loginStore = new loginstoreClass();

ngOnInit(){
  this.errorService.error.subscribe((error:ErrorFromService)=>{
    console.log('error desde login service')
    this.loginStore.error.next(
      {
        message:error.error.message,
        type:TypeProjectEnum.danger
      }
    )
    
  })
}
  constructor(private http:HttpClient,private router:Router,private errorService:ErrorService) { 
    
  }

  get loginButtonOptions():ButtonInterface{

    return {
      action:'continueLogin',
      text:'continue',
      bgColor:'yellow',
      textColor:'white',

    }

  }
  
  /* mockoptions = {
    email:'pedritusz2@gmail.com',
    password:'123456',
  } */

  login(credentials):void{
    
    this.http.post('http://localhost:3002/login',credentials).subscribe(
      
      (response:LoginResponse)=> {

        if(response.ok){

        this.loginStore.loginResponse = response;
        sessionStorage.setItem('userToken',response.token);
        sessionStorage.setItem('okUser','ok');

        this.router.navigate(['dashboard'])

        
        }
        
      }
        
    )
  
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
