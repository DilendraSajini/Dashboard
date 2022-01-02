import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, LoggingUser } from './logging-user.reducer';

export const selectLoggingUser = createFeatureSelector<LoggingUser>(featureKey);

export const selectUserName = createSelector(selectLoggingUser, state => state.userName);

