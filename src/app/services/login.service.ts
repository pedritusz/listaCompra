import { Injectable, OnInit } from '@angular/core';
import { ButtonInterface } from '../interfaces/buttonInterface';
import { HorizontalScrollContainerInterface } from '../interfaces/horizontal-scroll-container';
import { AlerOptionsInterface } from '../interfaces/aler-options.interface';
import { TypeProjectEnum } from '../enums/typeAlert.enum';
import {HttpClient} from '@angular/common/http'
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';
import { ErrorFromErrorService } from '../interfaces/error-from-service';
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
  
}
  constructor(private http:HttpClient,private router:Router,private errorService:ErrorService) { 

  this.errorService.error.subscribe((error:ErrorFromErrorService)=>{
    this.loginStore.error.next(
      {
        message:error?error.error.message:undefined,
        type:TypeProjectEnum.danger
      }
    )
    
    setTimeout(()=>{this.errorService.error.next(undefined)},10000)
    
  })
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

        
        }
        
      }
        
    )
  
  }

  register(newUser){
  
    //cambiar interfaz de repsuesta
  
    this.http.post('http://localhost:3002/users',newUser).subscribe((response:LoginResponse)=>{
      
    if(response.ok){

      this.loginStore.loginResponse = response;
      sessionStorage.setItem('userToken',response.token);
      sessionStorage.setItem('okUser','ok');

      this.router.navigate(['dashboard'])

      }

    })

  }
  
  get continueCreateProfileButtonOptions():ButtonInterface{
    return {

      action:'creteProfile',
      text:'continue',
      bgColor:'yellow',
      textColor:'white',
    }
  }
    
  get toLoginButtonOptions():ButtonInterface{
    return {

      action:'toLogin',
      text:'To Login',
      bgColor:'red',
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
