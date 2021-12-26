import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoggingUserActions } from '.';
import { findLoggingUser } from '../../services/logging-user-service';
import { logError } from '../../utils/log-util';
import { LoggingUser } from './logging-user.reducer';

@Injectable()
export class LoggingUserEffects {
  constructor(private readonly actions$: Actions) { }
  getLoggingUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoggingUserActions.getLoggingUser),
      switchMap(() => findLoggingUser()),
      catchError(error => {
        logError(this, error, 'setDefaultFromDate');
        return of([]);
      }),
      map((user: LoggingUser) => {
        if (user.id) {
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
      userId: user.id,
    });
  }
}
