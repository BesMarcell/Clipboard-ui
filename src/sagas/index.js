import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import serverInfo from '../api/server';
import { FETCH_SERVER_INFO_REQUESTED, FETCH_SERVER_INFO_SUCCESSED, FETCH_SERVER_INFO_FAILED } from '../constants/';

function * fetchServerInfo() {
  try {
    const infoAll = yield call(serverInfo);
    const info = infoAll.data;
    yield put({type: FETCH_SERVER_INFO_SUCCESSED, info});
  } catch (err) {
    yield put({type: FETCH_SERVER_INFO_FAILED, error: err.message});
  }
}

function * mySaga() {
  try {
    yield takeLatest(FETCH_SERVER_INFO_REQUESTED, fetchServerInfo);
  } catch (err) {
    console.log(err);
  }
}

export default mySaga;
