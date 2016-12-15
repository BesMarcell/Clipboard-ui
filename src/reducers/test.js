import {REQUEST_TEST} from '../constants/';

const test = (state = '___', action) => {
  switch (action.type) {
    case REQUEST_TEST: return action.text;
    default: return state;
  }
};

export default test;
