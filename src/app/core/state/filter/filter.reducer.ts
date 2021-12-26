import { createReducer, on } from '@ngrx/store';
import { updateCode, updateFilterCriteria, updateFromDate, updateSearch } from './filter.actions';

export const featureKey = 'filter';

export interface Filter {
  searchValue: string;
  fromDate: Date;
  toDate: Date;
  courseType: string;
  courseStatus: string;
  showCode: boolean;
}

const initialFilterState: Filter = {
  searchValue: "",
  fromDate: undefined,
  toDate: undefined,
  courseType: "",
  courseStatus: "",
  showCode: false
}

export const reducer = createReducer(
  initialFilterState,
  on(updateSearch, (state, action) => {
    return {
      ...state,
      searchValue: action.searchValue,
    };
  }),
  on(updateCode, (state, action) => {
    return {
      ...state,
      showAntibioticCode: action.showAntibioticCode,
    };
  }),
  on(updateFilterCriteria, (state, action) => {
    return {
      ...state,
      fromDate: action.fromDate,
      toDate: action.toDate,
    };
  }),
  on(updateFromDate, (state, action) => {
    return {
      ...state,
      fromDate: action.fromDate,
      fromDateSettingValue: action.fromDate,
    };
  })
);
