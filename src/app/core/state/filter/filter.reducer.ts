import { createReducer, on } from '@ngrx/store';
import { startOfToday, startOfTomorrow, startOfYesterday } from 'date-fns';
import { COURSE_STATUS } from '../../model/course';
import { COURSE_TYPE } from '../../model/course';
import { updateCode, updateFilterCriteria, updateFromDate, updateSearch } from './filter.actions';

export const featureKey = 'filter';

export interface Filter {
  searchValue: string;
  fromDate: Date;
  toDate: Date;
  courseType: COURSE_TYPE;
  courseStatus: COURSE_STATUS;
  showCode: boolean;
}

const initialFilterState: Filter = {
  searchValue: '',
  fromDate: startOfYesterday(),
  toDate: startOfTomorrow(),
  courseType: COURSE_TYPE.All,
  courseStatus: COURSE_STATUS.All,
  showCode: false
};

export const reducer = createReducer(
  initialFilterState,
  on(updateSearch, (state, action) => {
    return {
      ...state,
      searchValue: action.searchValue
    };
  }),
  on(updateCode, (state, action) => {
    return {
      ...state,
      showAntibioticCode: action.showAntibioticCode
    };
  }),
  on(updateFilterCriteria, (state, action) => {
    return {
      ...state,
      fromDate: action.fromDate,
      toDate: action.toDate,
      courseType: action.courseType,
      courseStatus: action.courseStatus
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
