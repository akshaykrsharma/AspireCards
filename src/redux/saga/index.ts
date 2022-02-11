import { put, takeEvery, fork, call } from 'redux-saga/effects'
import APIManager from '../../networking/APIManager';
import TYPES from '../type';
const { FETCHING_USER_DATA, USER_DATA_SUCCESS, USER_DATA_ERROR, UPDATE_BALANCE_SUCCESS, UPDATE_BALANCE_ERROR } = TYPES;


// Worker
function* fetchingUserData() {

	APIManager.getResponse("/aspire/4", "GET", {}, (status:boolean, response:string) => {
		if (status) {
			console.log(response);
		}
	});

// try {
//       const user = yield call(Api.fetchUser, action.payload.userId);
//       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//    } catch (e) {
//       yield put({type: "USER_FETCH_FAILED", message: e.message});
//    }
	
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

export = [fork(FetchingUserData),fork(UpdateUserData)]
	
