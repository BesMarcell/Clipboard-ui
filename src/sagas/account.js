import * as types from './../constants/account';
import {takeLatest} from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import  { Api } from './../api';

function* signup (action) {
  try {
    const response = yield call(Api.account.signup, action.payload);
    console.log('+++++!!!+++++'+JSON.stringify(response));

  } catch(error) {
    console.log('____oops______' + error);
    yield put({type: types.ACCOUNT_SIGNUP_FAILED, response: 'oops'});
  }
}

function* signupSaga() {
  yield takeLatest(types.ACCOUNT_SIGNUP_REQUESTED, signup);
}

export {signupSaga};
