import * as types from '../constants/clipboard';
import createReducer from './../utils/createReducer';

const initialState = {
  clipboard: null,
  clipboards: null,
  errorMessage: null,
  types: [{value: 'text', text: 'text'}]
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
      clipboard: payload.clipboard
    };
  },
  [types.CLIPBOARD_ADD_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.error,
      statusCode: payload.response.status
    };
  },
  [types.CLIPBOARDS_RECEIVE_REQUESTED]: state => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.CLIPBOARDS_RECEIVE_SUCCESSED]: (state, payload) => {
    return {
      ...state,
      clipboards: payload.clipboards
    };
  },
  [types.CLIPBOARDS_RECEIVE_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.error,
      statusCode: payload.response.status
    };
  },
  [types.CLIPBOARDS_DELETE_REQUESTED]: state => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.CLIPBOARDS_DELETE_SUCCESSED]: (state, payload) => {
    return {
      ...state
    };
  },
  [types.CLIPBOARDS_DELETE_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.error,
      statusCode: payload.response.status
    };
  },
  [types.CLIPBOARDS_EDIT_REQUESTED]: state => {
    return {
      ...state,
      errorMessage: null
    };
  },
  [types.CLIPBOARDS_EDIT_SUCCESSED]: (state, payload) => {
    return {
      ...state
    };
  },
  [types.CLIPBOARDS_EDIT_FAILED]: (state, payload) => {
    return {
      ...state,
      errorMessage: payload.response.error,
      statusCode: payload.response.status
    };
  }
});

export default clipboard;
