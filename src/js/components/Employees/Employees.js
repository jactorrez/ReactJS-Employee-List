import React from "react";
import AddEmployee from "./AddEmployee";
import EmployeeCard from "./EmployeeCard";
import { connect } from "react-redux"; 
import { addEmp, changeFillerText, removeEmp, foundEmployees, addErrors, clearErrors } from "../../redux/actions/actions";
import store from "../../redux/store";
import { fromJS } from "immutable";

class Employees extends React.Component{

	constructor(){
		super();
		this.addEmployee = this.addEmployee.bind(this);
		this.findEmployee = this.findEmployee.bind(this);
	}

	addEmployee(e, name, role){

		e.preventDefault();

		var foundName = this.props.employees.find(function(value){
			return value.name === name;
		});

		let regex = /(\w+) (\w+)/g;

		let namePass = regex.test(name);

		if(!name && !role){
			const foundErrors = [];

			foundErrors.push("You didn't enter a name");
			foundErrors.push("You didn't enter a role");

			this.props.sendError(foundErrors);
		}

		else if(!namePass){
			const foundErrors = [];

			foundErrors.push("You didn't enter a full name");

			this.props.sendError(foundErrors);
		}

		else if(!name){
			
			const foundErrors = [];

			foundErrors.push("You didn't enter a name");

			this.props.sendError(foundErrors);
		}

		else if(!role){
			const foundErrors = [];

			foundErrors.push("You didn't enter a role");

			this.props.sendError(foundErrors);
		}

		else if(foundName){
			const foundErrors = [];

			foundErrors.push("This person has already been added");

			this.props.sendError(foundErrors);
		}

		else{
			this.props.clearErrors(); 

			//generate image 
			const rand = Math.floor((Math.random() * 85) + 1);
			const img = "https://randomuser.me/api/portraits/men/" + rand + ".jpg";
			//generate id 
			const id = '_' + Math.random().toString(36).substring(2,9);

			this.props.addEmps(id, name, role, img);
		}
	}

	findEmployee(name){
		const employees = this.props.employees.size;
		const fieldVal = this.searchField.value;

		if(!fieldVal){
			const fillText = null;
			this.props.changeFiller(fillText);
			this.props.queryFoundEmps(null);
		}

		else if(!employees && fieldVal){
			const fillText = "No Employees To Search";
			this.props.changeFiller(fillText); 
		}

		else if(employees && (fieldVal || fieldVal === "")){

			const foundEmployees = this.props.employees.filter(function(value){
				const isQueryInString = value.name.toLowerCase().indexOf(fieldVal.toLowerCase()) !== -1;
				return isQueryInString;
			});

			this.props.queryFoundEmps(foundEmployees);
		}
	}

	render(){ 
	console.log(this.props.queryEmployees);

	var employees = this.props.queryEmployees || this.props.employees;
	var cardArray = employees.map(function(value, index){
		return <EmployeeCard key={index} id={index} callRemoveEmp={this.props.removeEmp} img={value.img} name={value.name} role={value.role} />
	}, this);

	
	return (<div class="row">
				<div className="col-md-12">
					<div className="well well-sm">
					 	<form action="#" class="text-center">
					 		<label htmlFor="" class="form-label">Search for an employee</label>
					 		<input type="search" class="form-search" ref={(search) => this.searchField = search} onChange={this.findEmployee} placeholder="Find an employee by name"/>
					 	</form>
					</div>
				</div>
				<div class="col-md-3" > 	
					<AddEmployee callAddEmp={this.addEmployee} errors={this.props.errors} />
				</div>
				<div className="col-md-9">
					{this.props.employees.size < 1 ? <h2 class="text-center filler-text">{this.props.filler ? this.props.filler : "Add Employees"}</h2>: ""}
					
					{cardArray}
				</div>
			</div>);
	}
}


const mapStateToProps = (store) => {
	return {
		employees: store.employees,
		queryEmployees: store.queryEmployees,
		errors: store.errors,
		filler: store.filler
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addEmps: function(id, name, role, img){
			dispatch(addEmp(id, name, role, img));
		},
		removeEmp: function(id){
			dispatch(removeEmp(id));
		},
		queryFoundEmps: function(employees){
			dispatch(foundEmployees(employees));
		},
		sendError: function(err){
			dispatch(addErrors(err));
		},
		clearErrors: function(){
			dispatch(clearErrors());
		},
		changeFiller: function(text){
			dispatch(changeFillerText(text));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
