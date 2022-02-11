import UserReducer from './UserReducer';

export default (state:any, action:any) => {
	return {
		...state,
		...UserReducer(state, action)
	};
};
