import { combineReducers } from 'redux';
import test from './test';
import serverInfo from './server-info';

const rootReducer = combineReducers({ test, serverInfo });

export default rootReducer;
