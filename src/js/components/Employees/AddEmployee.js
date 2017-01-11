import React from "react";
import _ from "lodash";

export default class AddEmployee extends React.Component {	

	loadErrors(){
		const errors = this.props.errors;
		const showErrors = errors.map(function(value, index){
			return <li key={index}> {value} </li>
		})
		return showErrors;
	}

	render(){

		return (
				<div class="panel panel-default">
					<div class="panel-heading"><b>Add Employee</b></div>
					<div class="panel-body">
						<form onSubmit={(e) => this.props.callAddEmp(e, this.nameInput.value, this.role.value)}>
							{this.props.errors.size > 0 ? <ul class="alert alert-danger"> {this.loadErrors()} </ul> : ""}
							<div className="form-group">
								<label htmlFor="">Full Name</label>
								<input class="form-control" ref={(fullName) => this.nameInput = fullName} type="text" placeholder="Employee Name"/>
							</div>

							<div className="form-group">
								<label htmlFor="">Role</label>
								<input class="form-control" ref={(empRole) => this.role = empRole} type="text" placeholder="Employee's Role"/>
							</div>

							<div className="form-group">
								<input type="submit" value="Add Employee" onClick={(e) => this.props.callAddEmp(e, this.nameInput.value, this.role.value)} class="btn btn-success btn-block"/>
							</div>
						</form>
					</div>
				</div>
		 );
	}
}
