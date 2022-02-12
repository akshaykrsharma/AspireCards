const INITIAL_STATE = {
  error: '',
  isFetching: true,
  payload: {},
};

import TYPES from '../type';

const {
  FETCHING_USER_DATA,
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  UPDATING_USER_DATA,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
} = TYPES;

 interface reduxPropType {
   action: {
     type:string
   },
}

 const userReducer=(state=INITIAL_STATE, action: reduxPropType) => {
  switch (action.type) {
    case FETCHING_USER_DATA:
      return {
        ...state,
        isFetching: true,
        payload: null,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isFetching: false,
        error: null,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    
     case UPDATING_USER_DATA:
      return {
        ...state,
        isFetching: true,
        payload: null,
      };
    
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        isFetching: false,
        error: null,
      };
    case USER_UPDATE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state ? {} : INITIAL_STATE;
  }
 };

module.exports = {
   userReducer
 }
