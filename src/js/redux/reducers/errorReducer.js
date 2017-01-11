import {List, fromJS} from "immutable";

export function errorReducer(state = List(), action){

	switch(action.type){
		case "ADD_ERRORS": {
			const oldState = state.clear();
			const newState = oldState.push(...action.payload);
			return newState;
			break;
		}
		case "CLEAR_ERRORS": {
			const newState = state.clear();
			return newState;
			break;
		}
	}
	return state;
}