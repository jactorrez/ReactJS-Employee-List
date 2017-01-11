import {combineReducers} from "redux";
import {employeesReducer} from "./employeesReducer";
import {errorReducer} from "./errorReducer"; 
import {fillerReducer} from "./fillerReducer";
import {queryReducer} from "./queryReducer";

export default combineReducers({
	employees: employeesReducer,
	queryEmployees: queryReducer,
	errors: errorReducer,
	filler: fillerReducer,
});

