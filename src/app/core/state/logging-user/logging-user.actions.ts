import { createAction, props } from '@ngrx/store';

export const changeLoggingUser = createAction('[Logging User] Change', props<{userId: string; userName: string; userType: string}>());
export const setLoggingUser = createAction('[Logging User] Set Logging User');
