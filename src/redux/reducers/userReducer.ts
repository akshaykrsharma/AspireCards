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
  UPDATE_BALANCE_SUCCESS,
  UPDATE_BALANCE_ERROR,
} = TYPES;

 interface reduxPropType {
   action: {
     type:string
   },
}

 const userReducer=(state=INITIAL_STATE, action: reduxPropType) => {
  console.log('AuthReducer Action=', action.type);

  switch (action.type) {
    case FETCHING_USER_DATA:
      return {
        ...state,
        isFetching: true,
        payload: null,
      };
    case USER_DATA_SUCCESS:
      console.log('AuthReducer Action=', action.payload);
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

    default:
      return state ? {} : INITIAL_STATE;
  }
 };

module.exports = {
   userReducer
 }
