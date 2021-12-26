import { createFeatureSelector } from '@ngrx/store';
import { featureKey, LoggingUser } from './logging-user.reducer';

export const selectLoggingUser = createFeatureSelector<LoggingUser>(featureKey);
