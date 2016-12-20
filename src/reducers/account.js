import * as types from '../constants/test';
import createReducer from './../utils/createReducer';

const initialState = {
  info: null,
  isAuthenticating: false,
  errorMessage: null
};

const serverInfo = createReducer(initialState, {
  [types.ACCOUNT_SIGNUP_REQUESTED]: state => {
    return {
      ...state,
      isAuthenticating: true,
      errorMessage: null
    };
  },
  [types.ACCOUNT_SIGNUP_SUCCESSED]: (state, payload) => {
    return {
      ...state
    };
  },
  [types.ACCOUNT_SIGNUP_FAILED]: state => {
    return {
      ...state
    };
  }
});

export default serverInfo;
