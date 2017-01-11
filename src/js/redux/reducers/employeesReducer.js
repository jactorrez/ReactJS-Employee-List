import {List} from "immutable";

export function employeesReducer(state = List(), action){


	switch(action.type){
		case "ADD_EMPLOYEE": {
			const newState = state.push({id: action.employee.id, img: action.employee.img, name: action.employee.name, role: action.employee.role});
			return newState;
			break;
		}
		case "REMOVE_EMPLOYEE": {	
			const newState = state.delete(action.payload);
			return newState;
			break;
		}
	}

	return state;
}