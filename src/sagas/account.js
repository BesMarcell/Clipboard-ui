import * as types from './../constants/account';
import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import  { Api } from './../api';

function* signup (action) {
  try {
    const response = yield call(Api.account.signup, action.payload);
    yield put({ type: types.ACCOUNT_SIGNUP_SUCCESSED, account: response.data });
  } catch (err) {
    yield put({ type: types.ACCOUNT_SIGNUP_FAILED, response: err.response });
  }
}

function* signin(action) {
  try {
    const response = yield call(Api.account.signin, action.payload);
    yield put({type: types.ACCOUNT_SIGNIN_SUCCESSED, account: response.data});
  } catch (err) {
    yield put({type: types.ACCOUNT_SIGNIN_FAILED, response: err.response});
  }
}

function* signupSaga() {
  yield takeLatest(types.ACCOUNT_SIGNUP_REQUESTED, signup);
}

function* signinSaga() {
  yield takeLatest(types.ACCOUNT_SIGNIN_REQUESTED, signin)
}

export { signupSaga };
export { signinSaga };
