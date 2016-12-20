import {REQUEST_TEST} from '../constants/test';
import createReducer from './../utils/createReducer';

const initialState = '___';

const test = createReducer(initialState, {
  [REQUEST_TEST]: (state, payload) => {
    return payload.text;
  }
});
export default test;
