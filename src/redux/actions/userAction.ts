import TYPES from '../type';
const { FETCHING_USER_DATA, USER_DATA_SUCCESS, USER_DATA_ERROR, UPDATING_USER_DATA, USER_UPDATE_SUCCESS, USER_UPDATE_ERROR } = TYPES;

export function getUser(payload:Object) {
  return {
    type: FETCHING_USER_DATA,
    payload: payload,
  };
}

export const getUserData=(payload:Object)=> {
  return {
    type: USER_DATA_SUCCESS,
    payload: payload,
  };
}

export function getUserFailure(error:Object) {
  return {
    type: USER_DATA_ERROR,
    payload: error,
  };
}

export function updateUserData(payload:Object) {
  return {
    type: UPDATING_USER_DATA,
    payload: payload,
  };
}

export const getUpdatedUserData=(payload:Object)=> {
  return {
    type: USER_UPDATE_SUCCESS,
    payload: payload,
  };
}

export function updateUserDataFailure(error:Object) {
  return {
    type: USER_UPDATE_ERROR,
    payload: error,
  };
}
