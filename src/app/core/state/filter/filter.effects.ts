import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FilterActions } from '.';
import { selectServerSide } from './filter.selectors';

@Injectable()
export class FilterEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {}

  // changeServerFilterSelection$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(FilterActions.updateFilterCriteria),
  //       withLatestFrom(this.store.select(selectServerSide), this.store.select(selectSoc)),
  //       map(([action, { fromDate, toDate, receivingUnits, receiver }, soc]) => {
  //         return {
  //           soc: getSOCId(soc),
  //           fromDate: fromDate,
  //           toDate: toDate,
  //           receivingUnits: receivingUnits,
  //           receiver: receiver,
  //           actionDiscriminator: action.type === TableDataActions.refreshTableData.type ? Math.random() : 1,
  //         };
  //       }),
  //       distinctUntilChanged(comparator),
  //       switchMap(searchCriteria => {
  //         if (searchCriteria.soc) {
  //           this.store.dispatch(
  //             TableDataActions.updateTableIsLoading({
  //               tableIsLoading: true,
  //             })
  //           );
  //           return findMicrobiologyReportsByPatient(
  //             new SearchCriteria(
  //               searchCriteria.soc,
  //               searchCriteria.fromDate,
  //               searchCriteria.toDate,
  //               searchCriteria.receivingUnits,
  //               searchCriteria.receiver
  //             ),
  //             this.reportsService
  //           ).pipe(
  //             catchError(error => {
  //               logError(this, error, 'changeServerFilterSelection');
  //               this.store.dispatch(TableDataActions.getTableDataFailureAction());
  //               return of([]);
  //             })
  //           );
  //         } else {
  //           return of([]);
  //         }
  //       }),
  //       map(reports => processReportData(reports, this.datePipe)),
  //       map(tableData => {
  //         return TableDataActions.updateTableData({
  //           tableData: tableData,
  //           tableIsLoading: false,
  //         });
  //       })
  //     ),
  //   { dispatch: true }
  // );

}
