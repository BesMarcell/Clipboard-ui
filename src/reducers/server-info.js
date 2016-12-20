import {FETCH_SERVER_INFO_REQUESTED, FETCH_SERVER_INFO_SUCCESSED, FETCH_SERVER_INFO_FAILED} from '../constants/test';
import createReducer from './../utils/createReducer';

const initialState = {
  serverUnixTime: null,
  serverTime: null,
  api: {}
};

const serverInfo = createReducer(initialState, {
  [FETCH_SERVER_INFO_REQUESTED]: state => {
    return {
      ...state
    };
  },
  [FETCH_SERVER_INFO_SUCCESSED]: (state, payload) => {
    return {
      ...state,
      serverUnixTime: payload.info.serverUnixTime,
      serverTime: payload.info.serverTime,
      api: payload.info.api
    };
  },
  [FETCH_SERVER_INFO_FAILED]: state => {
    return {
      ...state
    };
  }
});

export default serverInfo;
