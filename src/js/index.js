import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Navbar from "./components/Misc/Navbar";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
	<Provider store={store}> 
		<App/>
	</Provider>, document.getElementById("app"));