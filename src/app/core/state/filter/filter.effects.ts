import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FilterActions } from '.';
import { selectServerSide } from './filter.selectors';
import { LoggingUserActions, selectLoggingUser } from '../logging-user';
import { TableActions } from '../table';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { logError } from '../../utils/log-util';
import { ReportsService, SearchCriteria } from '../../services/report-service';
@Injectable()
export class FilterEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly reportsService: ReportsService
  ) { }

  changeServerFilterSelection$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FilterActions.updateFilterCriteria, LoggingUserActions.changeLoggingUser),
        withLatestFrom(this.store.select(selectServerSide), this.store.select(selectLoggingUser)),
        map(([action, { fromDate, toDate, courseType, courseStatus }, loggingUser]) => {
          return {
            loggingUserId: loggingUser.userId,
            fromDate: fromDate,
            toDate: toDate,
            courseType: courseType,
            courseStatus: courseStatus
            //actionDiscriminator: action.type === TableActions.refreshTableData.type ? Math.random() : 1,
          };
        }),
        switchMap(searchCriteria => {
          this.store.dispatch(
            TableActions.updateTableIsLoading({
              tableIsLoading: true
            })
          );
          return this.reportsService.findRecordsByUser(
            new SearchCriteria(
              searchCriteria.loggingUserId,
              searchCriteria.fromDate,
              searchCriteria.toDate,
              searchCriteria.courseType,
              searchCriteria.courseStatus
            )
          ).pipe(
            catchError(error => {
              logError(this, error, 'changeServerFilterSelection');
              this.store.dispatch(TableActions.getTableDataFailureAction());
              return of([]);
            })
          );
        }),
        map(tableData => {
          return TableActions.updateTableData({
            tableData: tableData,
            tableIsLoading: false
          });
        })
      ),
    { dispatch: true }
  );
}
