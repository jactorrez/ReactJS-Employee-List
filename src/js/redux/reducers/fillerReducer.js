import {Map, fromJS} from "immutable";

export function fillerReducer(state = null, action){

	switch(action.type){

		case "CHANGE_FILLER": {
			const newState = action.payload;
			return newState;
		}
	}
	return state; 
}