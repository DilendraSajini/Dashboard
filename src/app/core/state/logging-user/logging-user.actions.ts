import { createAction, props } from '@ngrx/store';

export const changeLoggingUser = createAction('[Logging User] Change', props<{userId: string}>());
export const getLoggingUser = createAction('[Logging User] Get Logging User');
