import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as types from './../constants/clipboard';
import { Api } from './../api';

function * clipboardAdd(action) {
  try {
    const result = yield call(Api.clipboard.addClipboard, action.payload);
    yield put({ type: types.CLIPBOARD_ADD_SUCCESSED, clipboard: result.data });
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

function * clipboardAddSaga() {
  yield takeLatest(types.CLIPBOARD_ADD_REQUESTED, clipboardAdd);
}

function * clipboardsReceiveSaga() {
  yield takeLatest(types.CLIPBOARDS_RECEIVE_REQUESTED, clipboardReceive);
}

export { clipboardAddSaga };
export { clipboardsReceiveSaga };
