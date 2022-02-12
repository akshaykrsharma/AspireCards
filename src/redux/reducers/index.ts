import {userReducer} from './userReducer';

export default (state:any, action:any) => {
	return {
		...state,
		...userReducer(state, action)
	};
};
