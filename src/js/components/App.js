import React from "react"; 
import "../../scss/styles.scss";
import Employees from "./Employees/Employees";
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory } from "react-router";
import Navbar from "./Misc/Navbar";
import _ from "lodash";
import { connect } from "react-redux";


export default class App extends React.Component {

	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Container}>
					<IndexRoute component={Employees}/>

					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		);	
	}
}


const About = (props) => (
	<div>
		<h1> Hello there! </h1>
		{props.children}
	</div>
	);

const NotFound = () => (<h1>404 This page doesn't exist!</h1>);

const Container = (props) => (<div><Navbar/> {props.children} </div>);

