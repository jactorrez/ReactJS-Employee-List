export function addEmployee(id, name, role){

		const foundName = _.find(this.state.employees, (i) => i.name === name);

		let regex = /(\w+) (\w+)/g;

		let namePass = regex.test(name);

		if(!name && !role){
			const foundErrors = {};

			foundErrors.nameError ="You didn't enter a name";
			foundErrors.roleError = "You didn't enter a role";

			this.setState({
				errors: foundErrors,
			});
		}

		else if(!namePass){
			const foundErrors = {};

			foundErrors.nameError = "You didn't enter a full name";

			this.setState({
				errors: foundErrors
			});
		}

		else if(!name){
			
			const foundErrors = {};

			foundErrors.nameError = "You didn't enter a name";

			this.setState({
				errors: foundErrors
			});
		}

		else if(!role){
			const foundErrors = {};

			foundErrors.roleError = "You didn't enter a role";

			this.setState({
				errors: foundErrors
			});

		}

		else if(foundName){
			const foundErrors = {};

			foundErrors.existsError = "This person has already been added";

			this.setState({
				errors: foundErrors
			});
		}

		else{

			let rand = Math.floor((Math.random() * 85) + 1);
			let img = "https://randomuser.me/api/portraits/men/" + rand + ".jpg";

			this.state.employees.push({
				name,
				role,
				img
			});

			this.setState({
				employees: this.state.employees,
				errors: null,
				homeHeader: null,
			});
		}
	}