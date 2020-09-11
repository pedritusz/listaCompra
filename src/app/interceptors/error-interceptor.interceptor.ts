import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import { ErrorService } from '../services/error.service';
import { ErrorFromErrorService } from '../interfaces/error-from-service';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(

      // desde el catch error capturo el error que me devuelve
      catchError( (error) => {
        this.errorService.error.next(error);
        // el trhowerror genera el error que yo quiera
        return throwError(error.error.message);

      })

    );
  }
}
