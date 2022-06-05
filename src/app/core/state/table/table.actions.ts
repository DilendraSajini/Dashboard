import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/table/table.component';

export const loadTableData = createAction('[Table Data] Load Table Data', props<{ tableData: string }>());

export const updateTableData = createAction(
  '[Table Data] Update Table Data',
  props<{ tableData: Course[]; tableIsLoading: boolean }>()
);

export const updateTableIsLoading = createAction(
  '[Table Data] Update Table Is Loading',
  props<{ tableIsLoading: boolean }>()
);

export const getTableDataFailureAction = createAction('[LoadTableData] Get Table Data Failure Action');

