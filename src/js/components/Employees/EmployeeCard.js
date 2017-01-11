import React from "react";

const EmployeeCard = ({callRemoveEmp, id, img, name, role}) => {

	var userID = id;

	function showID(){
		callRemoveEmp(userID);
	}

	return (
		<div class="col-md-5 col-md-offset-1 panel panel-default employ-card">
		   <span class="glyphicon glyphicon-remove x-icon" onClick={showID}></span>
		   <div>
		   		<img width="70" height="70" src={img} class="placehold-img center-block" alt=""/>
		   </div>
		   <ul class="emp-info-list">
		   		<li><b>Name: </b>{name}</li>
		   		<li><b>Role: </b>{role}</li>
		   </ul>
		</div>
	)
}

export default EmployeeCard;