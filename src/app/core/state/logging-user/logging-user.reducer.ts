
import { createReducer, on } from '@ngrx/store';
import { changeLoggingUser } from './logging-user.actions';

export const featureKey = 'logging-user';

export interface LoggingUser {
  id: string;
  name: string;
  type: string;
}

export type State = LoggingUser;

const initialState: State = { id: '01', name: 'User 01', type: 'Student' };

export const reducer = createReducer(
  initialState,
  on(changeLoggingUser, (state, action) => {
    return {
      ...state,
      id: action.userId,
    };
  })
);
