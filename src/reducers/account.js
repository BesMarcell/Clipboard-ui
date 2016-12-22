import * as types from '../constants/account';
import createReducer from './../utils/createReducer';

const initialState = {
  info: null,
  isAuthenticating: false,
  isAuthenticated: false,
  errorMessage: null
};

const serverInfo = createReducer(initialState, {
  [types.ACCOUNT_SIGNUP_REQUESTED]: state => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.ACCOUNT_SIGNUP_SUCCESSED]: (state, payload) => {
    return {
      ...state,
      info: payload.account,
      isAuthenticated: true
    };
  },
  [types.ACCOUNT_SIGNUP_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.data.error,
      statusCode: payload.response.status,
      isAuthenticated: false
    };
  },
  [types.ACCOUNT_SIGNIN_REQUESTED]: (state, payload) => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.ACCOUNT_SIGNIN_SUCCESSED]: (state, payload) => {
    return {
      ...state,
      info: payload.account,
      isAuthenticated: true
    };
  },
  [types.ACCOUNT_SIGNIN_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.data.error,
      statusCode: payload.response.status,
      isAuthenticated: false
    };
  }
});

export default serverInfo;
