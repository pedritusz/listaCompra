import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { ErrorFromService } from '../interfaces/error-from-service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error = new Subject()

  constructor() { }
  
    setError(NewError:ErrorFromService){
    
      this.error.next(NewError);
    
    
    }
  


}
