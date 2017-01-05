import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as types from './../constants/clipboard';
import { Api } from './../api';

function * clipboardAdd(action) {
  try {
    const result = yield call(Api.clipboard.addClipboard, action.payload);
    yield put({ type: types.CLIPBOARD_ADD_SUCCESSED, clipboard: result.data });
    yield put({ type: types.CLIPBOARDS_RECEIVE_REQUESTED });
  } catch (err) {
    yield put({ type: types.CLIPBOARD_ADD_FAILED, response: err.response.data });
  }
}

function * clipboardReceive(action) {
  try {
    const result = yield call(Api.clipboard.receiveClipboards);
    yield put({ type: types.CLIPBOARDS_RECEIVE_SUCCESSED, clipboards: result.data });
  } catch (err) {
    yield put({ type: types.CLIPBOARDS_RECEIVE_FAILED, response: err.response.data });
  }
}

function * clipboardDelete(action) {
  try {
    yield call(Api.clipboard.deleteClipboard, action.payload);
    yield put({ type: types.CLIPBOARD_DELETE_SUCCESSED });
    yield put({ type: types.CLIPBOARDS_RECEIVE_REQUESTED });
  } catch (err) {
    yield put({ type: types.CLIPBOARD_DELETE_FAILED, response: err.response.data });
  }
}

function * clipboardAddSaga() {
  yield takeLatest(types.CLIPBOARD_ADD_REQUESTED, clipboardAdd);
}

function * clipboardsReceiveSaga() {
  yield takeLatest(types.CLIPBOARDS_RECEIVE_REQUESTED, clipboardReceive);
}

function * clipboardDeleteSaga() {
  yield takeLatest(types.CLIPBOARD_DELETE_REQUESTED, clipboardDelete);
}

export { clipboardAddSaga };
export { clipboardsReceiveSaga };
export { clipboardDeleteSaga };
