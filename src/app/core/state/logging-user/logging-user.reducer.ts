
import { createReducer, on } from '@ngrx/store';
import { changeLoggingUser } from './logging-user.actions';

export const featureKey = 'logging-user';

export interface LoggingUser {
  userId: string;
  userName: string;
  userType: string;
}

export type State = LoggingUser;

const initialState: State = { userId: '01', userName: 'User 01', userType: 'Admin' };

export const reducer = createReducer(
  initialState,
  on(changeLoggingUser, (state, action) => {
    return {
      ...state,
      userId: action.userId,
      userName: action.userName,
      userType: action.userType
    };
  })
);
