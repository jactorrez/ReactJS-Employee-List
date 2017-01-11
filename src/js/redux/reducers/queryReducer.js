import {List} from "immutable"; 
export function queryReducer(state = null, action){

	switch(action.type){
		case "QUERY_EMPLOYEES": {
			const newState = action.payload;
			console.log(newState);
			return newState;
			break;
		}
	}
	return state;
}