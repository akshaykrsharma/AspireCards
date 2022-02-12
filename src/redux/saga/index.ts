import { put, takeEvery, call, all } from 'redux-saga/effects'
import APIManager from '../../networking/APIManager';
import TYPES from '../type';
const { FETCHING_USER_DATA, USER_DATA_SUCCESS, USER_DATA_ERROR, UPDATE_BALANCE_SUCCESS, UPDATE_BALANCE_ERROR } = TYPES;


// Worker
function* fetchingUserData() {
try {
      const user = yield call(APIManager.createPromise,"/aspire/4", "GET", {});
      yield put({type: USER_DATA_SUCCESS, response: user});
   } catch (e) {
      yield put({type: USER_DATA_ERROR, error: e.message});
   }
	
}

// Watcher
function* FetchingUserData() {
	yield takeEvery(FETCHING_USER_DATA, fetchingUserData);
}


// Worker
function* updateUserData() {
	
}

// Watcher
function* UpdateUserData() {
	yield takeEvery(UPDATE_BALANCE_SUCCESS, updateUserData);
}



// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    FetchingUserData(),
    UpdateUserData()
  ])
}

