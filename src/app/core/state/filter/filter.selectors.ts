import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter, featureKey } from './filter.reducer';

export const getFilterState = createFeatureSelector<Filter>(featureKey);

export const selectSearch = createSelector(getFilterState, state => state.searchValue);

export const selectToggle = createSelector(getFilterState, state => state.showCode);

export const selectClientSide = createSelector(
  selectSearch,
  selectToggle,
  (searchValue, showCode) => {
    return {
      searchValue: searchValue,
      showCode: showCode
    };
  }
);
export const selectFromDate = createSelector(getFilterState, state => state.fromDate);

export const selectToDate = createSelector(getFilterState, state => state.toDate);

export const selectCourseType = createSelector(getFilterState, state => state.courseType);

export const selectCourseStatus = createSelector(getFilterState, state => state.courseStatus);

export const selectServerSide = createSelector(
  selectFromDate,
  selectToDate,
  selectCourseType,
  selectCourseStatus,
  (fromDate, toDate, type, status) => {
    return {
      fromDate: fromDate,
      toDate: toDate,
      courseType: type,
      courseStatus: status,
    };
  }
);
