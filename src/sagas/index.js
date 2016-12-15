import { call, put, takeLatest } from 'redux-saga/effects';
import serverInfo from '../api/server';
import { FETCH_SERVER_INFO_REQUESTED } from '../constants';

function * fetchServerInfo() {
  console.log('---2-');
  try {
    const info = yield call(serverInfo);
    yield put({type: 'FETCH_SERVER_INFO_SUCCESSED', info});
  } catch (err) {
    yield put({type: 'FETCH_SERVER_INFO_FAILED', message: err.message});
  }
}

function * mySaga() {
  console.log('+++1');
  try {
    console.log('+++11');
    yield takeLatest(FETCH_SERVER_INFO_REQUESTED, fetchServerInfo);
    console.log('+++12');
  } catch (err) {
    console.log('+++13');
    console.log(err);
  }
}

export default mySaga;
