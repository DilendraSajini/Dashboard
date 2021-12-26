import { createAction, props } from '@ngrx/store';

export const updateSearch = createAction(
  '[Search] Change Search ',
  props<{ searchValue: string }>()
);

export const updateCode = createAction(
  '[Filter] Toggle Filter',
  props<{ showAntibioticCode: boolean }>()
);

export const updateFilterCriteria = createAction(
  '[Filter] Change Filter Criteria',
  props<{ fromDate: Date; toDate: Date;}>()
);

export const setInitialFromDate = createAction(
  '[InitializeFilter] Initialize From Date Filter'
);

export const updateFromDate = createAction(
  '[Filter] Change From Date',
  props<{ fromDate: Date }>()
);


