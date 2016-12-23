import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as types from './../constants/account';
import { Api } from './../api';

function * signup(action) {
  try {
    const response = yield call(Api.account.signup, action.payload);
    yield put({ type: types.ACCOUNT_SIGNUP_SUCCESSED, account: response.data });
  } catch (err) {
    yield put({ type: types.ACCOUNT_SIGNUP_FAILED, response: err.response });
  }
}

function * signin(action) {
  try {
    const response = yield call(Api.account.signin, action.payload);
    yield put({ type: types.ACCOUNT_SIGNIN_SUCCESSED, account: response.data });
  } catch (err) {
    yield put({ type: types.ACCOUNT_SIGNIN_FAILED, response: err.response });
  }
}

function * logout() {
  try {
    yield call(Api.account.logout);
    yield put({ type: types.ACCOUNT_LOGOUT_SUCCESSED });
  } catch (err) {
    yield put({ type: types.ACCOUNT_LOGOUT_FAILED });
  }
}

function * fetchAccount(action) {
  try {
    const response = yield call(Api.account.fetch);
    yield put({ type: types.ACCOUNT_FETCH_SUCCESSED, account: response.data});
  } catch (err) {
    yield put({ type: types.ACCOUNT_FETCH_FAILED, response: err.response })
  }
}

function * signupSaga() {
  yield takeLatest(types.ACCOUNT_SIGNUP_REQUESTED, signup);
}

function * signinSaga() {
  yield takeLatest(types.ACCOUNT_SIGNIN_REQUESTED, signin);
}

function * logoutSaga() {
  yield takeLatest(types.ACCOUNT_LOGOUT_REQUESTED, logout);
}

function * fetchAccountSaga() {
  yield takeLatest(types.ACCOUNT_FETCH_REQUESTED, fetchAccount)
}

export { signupSaga };
export { signinSaga };
export { logoutSaga };
export { fetchAccountSaga };
