import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggingUser } from '../state/logging-user/logging-user.reducer';

@Injectable({
  providedIn: 'root'
})
export class LoggingUserService {
  public findLoggingUser(
  ): Observable<LoggingUser> {
    return of({
      userId: '01',
      userName: 'User 01',
      userType: 'Acedemic'
    });
  }
}
