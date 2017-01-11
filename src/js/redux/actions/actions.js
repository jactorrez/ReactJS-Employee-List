import _ from "lodash"; 

/* ---- Employee Reducer ---- */
export function addEmp(id, name, role, img){

	return {
		type: "ADD_EMPLOYEE",
		employee: {
			id,
			img,
			name,
			role,
		}
	}
}

export function removeEmp(id){
	return {
		type: "REMOVE_EMPLOYEE",
		payload: id
	}
}

/* ---- Query Reducer ---- */

export function foundEmployees(employees){

	return {
		type: "QUERY_EMPLOYEES",
		payload: employees
	}
}

/* ---- Error Reducer ---- */

export function addErrors(err){
	
	return {
		type: "ADD_ERRORS",
		payload: err
	}
}

export function clearErrors(){

	return {
		type: "CLEAR_ERRORS"
	}
}

/* ---- Filler Text Reducer ---- */

export function changeFillerText(text){
	return {
		type: "CHANGE_FILLER",
		payload: text
	}
}