import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoggingUserActions } from '.';
import { LoggingUserService } from '../../services/logging-user-service';
import { logError } from '../../utils/log-util';
import { LoggingUser } from './logging-user.reducer';

@Injectable()
export class LoggingUserEffects {
  constructor(private readonly actions$: Actions, private readonly loggingUserService: LoggingUserService) { }
  getLoggingUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoggingUserActions.setLoggingUser),
      switchMap(() => this.loggingUserService.findLoggingUser()),
      catchError(error => {
        logError(this, error, 'setDefaultLoggingUser');
        return of([]);
      }),
      map((user: LoggingUser) => {
        if (user.userId) {
          return this.updateLoggingUser(user);
        } else {
          return this.updateLoggingUser(user);
        }
      })
    ),
    { dispatch: true }
  );

  private updateLoggingUser(user: LoggingUser) {
    return LoggingUserActions.changeLoggingUser({
      userId: user.userId,
      userName: user.userName,
      userType: user.userType,
    });
  }
}
