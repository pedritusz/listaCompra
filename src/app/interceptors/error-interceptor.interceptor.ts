import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private errorService:ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(

      catchError( (error) => { 
       console.log(error.headers)
        this.errorService.setError(error)

        return throwError(error.error.message)
      })

    );
  }
}
