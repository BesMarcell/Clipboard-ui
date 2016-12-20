import { combineReducers } from 'redux';
import test from './test';
import serverInfo from './server-info';
import account from './account';

const rootReducer = combineReducers({ test, serverInfo, account });

export default rootReducer;
