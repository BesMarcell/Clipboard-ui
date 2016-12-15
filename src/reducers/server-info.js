// import update from 'react-addons-update';
import {FETCH_SERVER_INFO_REQUESTED, FETCH_SERVER_INFO_SUCCESSED, FETCH_SERVER_INFO_FAILED} from '../constants/';

const initialstate = {
  serverUnixTime: '',
  serverTime: '',
  api: ''
};

const test = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_SERVER_INFO_REQUESTED: return state;
    case FETCH_SERVER_INFO_SUCCESSED: return action.info;
    case FETCH_SERVER_INFO_FAILED: return action.error;
    default: return state;
  }
};

export default test;
