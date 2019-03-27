import React from 'react';
import './Signin.css';

class Signup extends React.Component{
  constructor(){
    super();
    this.state={
      fullname:"",
      username:"",
      email:"",
      password:"",
      confirm:"",
      error:'',
    }
  }

  handleChange = (e) =>{
    const { state } = this;
    const { name, value } = e.target; 
    state[name] = value
    this.setState({
      ...state,
    })
  }

  validateChange = () => {
    let {
      fullname,  
      username,
      email,
      password,
      confirm,
      error,
    } = this.state;
    error= ""
    if (fullname === ""){
      error = "Full Name is Empty";
    }
    else if (username === "" ){
      error = "User Name is Empty";
    }
    else if (email === "" ){
        error = "Email is Empty";
    }
    else if (password === "" ){
        error = "Password is Empty";
    }
    else if (confirm === "" ){
        error = "Confirm is Empty";
    }
    else if (password.length < 8){
        error = "Password must be 8 Character"
    }
    else if (password !== confirm){
        error = "Passwords donot match"
    }

    return error; 
  }

  saveChange = () => {
    const error = this.validateChange();
    if (error){
      this.setState({
        error: error
      })
    }
    else{
      this.setState({
        error: ""
      })
     console.log("saved")
    }
  }

  render(){
    const { fullname,username,password,error,confirm,email } = this.state;
    return(
      <div className="login_form">
        <input type="text" placeholder="Full Name" name="fullname" value={fullname} onChange={this.handleChange} />
        <input type="text" placeholder="UserName" name="username" value={username} onChange={this.handleChange} />
        <input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
        <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
        <input type="password" placeholder="Confirm Password" name="confirm" value={confirm} onChange={this.handleChange} />
        <input type="button" onClick={this.saveChange} value="Sign Up"/>
        {error ? <div className="error">{error}</div> : ""}
      </div>
    )
  }
}

export default Signup;