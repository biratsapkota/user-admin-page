import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/About';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Admin from './components/admin/Admin';
import { Route, Switch, Redirect,NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/user/" />
        <Route path="/user/" component={UserNavigation} />
        <Route path="/admin/" component={AdminNavigation} />      
      </Switch>
    );
  }
}

export default App;

const UserNavigation = () =>{
  return(
    <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Redirect exact from="/user/" to="/user/home/" />
            <Route path="/user/home/" component={Home} />
            <Route path="/user/about/" component={About} />
            <Route path="/user/signin/" component={Signin} />
            <Route path="/user/signup/" component={Signup} />       
          </Switch>      
        </div>        
    </div>
  )
}

const AdminNavigation = () =>{
  return(
    <div className="container">
        <div className="admin_signin">
					<NavLink
						to="/admin/home"
						activeClassName="active_item"
						className="menu_item"
					>
						Home
					</NavLink>
          <NavLink
						to="/admin/signin"
						activeClassName="active_item"
						className="menu_item"
					>
						SignIn
					</NavLink>
					<NavLink
						to="/admin/signup"
						activeClassName="active_item"
						className="menu_item"
					>
						SignUp
					</NavLink>
				</div>
          <Switch>
            <Redirect exact from="/admin" to="/admin/home/" />
            <Route exact path="/admin/home/" component={Admin}/>
            <Route path="/admin/signin/" component={Signin} />
            <Route path="/admin/signup/" component={Signup} />       
          </Switch>      
      </div>        
  )
}