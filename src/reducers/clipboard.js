import * as types from '../constants/clipboard';
import createReducer from './../utils/createReducer';

const initialState = {
  info: null,
  errorMessage: null
};

const clipboard = createReducer(initialState, {
  [types.CLIPBOARD_ADD_REQUESTED]: state => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.CLIPBOARD_ADD_SUCCESSED]: (state, payload) => {
    return {
      ...state,
      info: payload.clipboard
    };
  },
  [types.CLIPBOARD_ADD_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.data.error,
      statusCode: payload.response.status
    };
  }
});

export default clipboard;
