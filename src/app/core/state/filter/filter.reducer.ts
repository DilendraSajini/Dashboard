import { createReducer, on } from '@ngrx/store';
import { startOfToday } from 'date-fns';
import { COURSE_STATUS } from '../../model/course-status';
import { COURSE_TYPE } from '../../model/course-type';
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
  fromDate: startOfToday(),
  toDate: startOfToday(),
  courseType: COURSE_TYPE.Individual,
  courseStatus: COURSE_STATUS.New,
  showCode: true
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
