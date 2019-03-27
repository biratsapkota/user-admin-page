import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="header_left">
					<NavLink
						to="/user/home/"
						activeClassName="active_item"
						className="menu_item"
					>
						Home 
					</NavLink>
					<NavLink
						to="/user/about/"
						activeClassName="active_item"
						className="menu_item"
					>
						About
					</NavLink>
					<NavLink
						to="/user/signin"
						activeClassName="active_item"
						className="menu_item"
					>
						SignIn
					</NavLink>
					<NavLink
						to="/user/signup"
						activeClassName="active_item"
						className="menu_item"
					>
						SignUp
					</NavLink>
				</div>				
			</div>
		)
	}
}