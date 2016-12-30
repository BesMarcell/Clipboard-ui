import { combineReducers } from 'redux';
import test from './test';
import serverInfo from './server-info';
import account from './account';
import clipboard from './clipboard';

const rootReducer = combineReducers({ test, serverInfo, account, clipboard });

export default rootReducer;
