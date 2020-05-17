import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginOkGuard implements CanActivate {
  constructor(private loginService:LoginServiceService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.loginService.loginStore.loginResponse.ok){
  
        return true;
  
      }

      this.router.navigate(['pruevas'])
      
    }
    
  }
