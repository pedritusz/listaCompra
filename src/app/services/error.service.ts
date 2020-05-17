import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ErrorFromErrorService } from '../interfaces/error-from-service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error = new BehaviorSubject<ErrorFromErrorService>(undefined)

  constructor() { }
  


}
