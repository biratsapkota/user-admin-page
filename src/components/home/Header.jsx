import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header.css';

export default class Header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="header_left">
					<NavLink
						to="/user/home/math/"
						activeClassName="active_item"
						className="menu_item"
					>
						Math 
					</NavLink>
					<NavLink
						to="/user/home/physics/"
						activeClassName="active_item"
						className="menu_item"
					>
						Physics
					</NavLink>
					<NavLink
						to="/user/home/chemistry/"
						activeClassName="active_item"
						className="menu_item"
					>
						Chemistry
					</NavLink>
					<NavLink
						to="/user/home/aboutus/"
						activeClassName="active_item"
						className="menu_item"
					>
						About Us
					</NavLink>
				</div>				
			</div>
		)
	}
}