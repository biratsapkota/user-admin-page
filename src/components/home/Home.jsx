import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import './Home.css';

export default class Home extends React.Component {
	render(){
		return(
			<div>
				<Header />
				<div className="container">
				<Switch>
					<Redirect exact from="/user/home" to="/user/home/math" />
					<Route path="/user/home/math/" component={Math} />
					<Route path="/user/home/physics/" component={Physics} />
					<Route path="/user/home/chemistry/" component={Chemistry} />
					<Route path="/user/home/aboutus/" component={Aboutus} />          
				</Switch>      
				</div>
			</div>
		)
	}
}

const Math = () => {
	return(
		<div className="math_section">
			This is Math Section
		</div>
	)
}

const Physics = () => {
	return(
		<div className="math_section">
			This is Physics Section
		</div>
	)
}

const Chemistry = () => {
	return(
		<div className="math_section">
			This is Chemistry Section
		</div>
	)
}

const Aboutus = () => {
	return(
		<div className="math_section">
			About Us
		</div>
	)
}