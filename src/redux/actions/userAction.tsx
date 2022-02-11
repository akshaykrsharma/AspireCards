import { FETCHING_USER_DATA, USER_DATA_SUCCESS, USER_DATA_ERROR, UPDATE_BALANCE_SUCCESS, UPDATE_BALANCE_ERROR } from "../types/type";

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

export function getBalanceData(payload:Object) {
  return {
    type: UPDATE_BALANCE_SUCCESS,
    payload: payload,
  };
}

export function getBalanceFailure(error:Object) {
  return {
    type: UPDATE_BALANCE_ERROR,
    payload: error,
  };
}
