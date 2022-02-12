import {put, takeEvery, call, all} from 'redux-saga/effects';
import APIManager from '../../networking/APIManager';
import EndPoints from '../../networking/EndPoints';
import TYPES from '../type';
const {
  IS_FETCHING_DATA,
  FETCHING_USER_DATA,
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATING_USER_DATA,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
} = TYPES;

// Worker
function* fetchingUserData(): Generator<any, any, any> {
  try {
    const response = yield call(
      APIManager.createPromise,
      EndPoints.USER_DATA_URL,
      EndPoints.Method.GET,
      {},
    );
    put({type: IS_FETCHING_DATA, isFetching: true});
    yield put({
      type: USER_DATA_SUCCESS,
      payload: response?.data,
      isFetching: false,
    });
  } catch (e) {
    yield put({type: USER_DATA_ERROR, error: e.message, isFetching: false});
  }
}

// Watcher
function* FetchingUserData() {
  yield takeEvery(FETCHING_USER_DATA, fetchingUserData);
}

// Worker
function* updateUserData(params:object) : Generator<any, any, any> {
  try {
    const response = yield call(
      APIManager.createPromise,
      EndPoints.UPDATE_USER_DATA_URL,
      EndPoints.Method.PATCH,
      params.payload,
    );
    put({type: IS_FETCHING_DATA, isFetching: true});
    yield put({
      type: USER_UPDATE_SUCCESS,
      payload: response?.data,
      isFetching: false,
    });
  } catch (e) {
    yield put({type: USER_UPDATE_ERROR, error: e.message, isFetching: false});
  }
}

// Watcher
function* UpdateUserData() {
  yield takeEvery(UPDATING_USER_DATA, updateUserData);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([FetchingUserData(), UpdateUserData()]);
}