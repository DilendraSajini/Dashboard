import { createFeatureSelector, createSelector } from '@ngrx/store';

import { featureKey, Table } from './table.reducer';

const getTableDataState = createFeatureSelector<Table>(featureKey);

export const selectTableData = createSelector(getTableDataState, state => state.tableData);

export const selectTableIsLoading = createSelector(getTableDataState, state => state.tableIsLoading);
