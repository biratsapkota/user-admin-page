import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
//import Keyboard from 'react-virtual-keyboard';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Admin.css';

export default class Admin extends React.Component{
	constructor(){
		super();
		this.state = {
			user_information:'',
		}
	}

	passInformation = (name) =>{
		this.setState({
			user_information: name,
		})
	}

	handleCancel = () =>{
		this.setState({
			user_information: ''
		})
	}

	render(){
		return(
			<div className="admin_wrapper">
				<div className="admin_head">Welcome Admin</div>
				<div className="admin_view">
					<div className="admin_left">
						<div className="left_head">
							List of Users
						</div>
						<div className="user_list" onClick={this.passInformation.bind(this,'Ram')}>
							Ram
						</div>
						<div className="user_list" onClick={this.passInformation.bind(this,'Shyam')}>
							Shyam
						</div>
						<div className="user_list" onClick={this.passInformation.bind(this,'Hari')}>
							Hari
						</div>
						<div className="user_list" onClick={this.passInformation.bind(this,'Gita')}>
							Gita
						</div>
					</div>

					<div className ="admin_right">
						{this.state.user_information ? <UserInfo user_information = {this.state.user_information} handleCancel={this.handleCancel}/> :<div className="please_click">Please click name to view user information </div>}	
					</div>
				</div>
			</div>
			
		)
	}
}

class UserInfo extends React.Component{
	constructor(){
		super()
		this.state = {
			open_dialoge:false,
		}
	}

	openModal = () =>{
		this.setState({
			open_dialoge:true,
		})
	}

	hideModal = () =>{
		this.setState({
			open_dialoge:false,
		})
	}

	
	render(){
		let {user_information} = this.props; 
		return(
			<React.Fragment>
				<div className="add_edit">
					<div className="add" onClick={this.openModal}>Add</div>
					<div className="edit">Edit</div>
				</div>
				<div className="user_info">
					Information of {user_information}
				</div>				
				<div className="save_cancel">
					<div className="save">Save</div>
					<div className="cancel" onClick={this.props.handleCancel}>Cancel</div>
				</div>
					{ this.state.open_dialoge ? <Add hideModal={this.hideModal}/> : '' }
			</React.Fragment>
		)
	}
}

class Add extends React.Component {
	constructor(){
		super()
		this.state = {
			username:'',
			description:'',
			show_keyboard:false,
		}
	}

	handleChange = (e) =>{
		const {state} = this;
		const {name,value}=e.target;
		state[name]=value;
		this.setState({
			...state,
		})
	}

	showKeyboard = () =>{
		this.setState({
			show_keyboard:!this.state.show_keyboard,
		})
	}

	hideKeyboard = () =>{
		this.setState({
			show_keyboard:false,
		})
	}

	onChange = (input) => {
		this.setState({
			description: input,
		})
	}

	onKeyPress = (button) => {
		this.setState({
			description: button,
		})
	}

	render(){
		return(
			<div className="add_dialoge">								
				<TextField
					outline
					margin="normal"
					id="name"
					name="username"
					label="Username"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.username}
					onClick={this.hideKeyboard}
					fullWidth
        		 />
				 <TextField
					id="outlined-multiline-static"
					label="Description"
					multiline
					rows="4"
					name="description"
					margin="normal"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.description}
					fullWidth
					InputProps={{
						endAdornment: <InputAdornment position="end">				
							<div className="keyboard_icon" onClick={this.showKeyboard}>
								<i class="far fa-keyboard"></i>
							</div>
						</InputAdornment>,
					}}
				/>

				{this.state.show_keyboard ? 
				<div className = "keyboard" style={{display:this.state.show_keyboard}}>
						<Keyboard
							onChange={input =>
							this.onChange(input)}
							onKeyPress={button =>
							this.onKeyPress(button)}
							layout={{
								'default': [
								  '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
								  '{tab} b ने ी प ा ल u i o p [ ] \\',
								  '{lock} a s d f g h j k l ; \' {enter}',
								  '{shift} z x c v b n m , . / {shift}',
								  '.com @ {space}'
								],
								'shift': [
								  '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
								  '{tab} Q W E R T Y U I O P { } |',
								  '{lock} A S D F G H J K L : " {enter}',
								  '{shift} Z X C V B N M < > ? {shift}',
								  '.com @ {space}'
								]
							  }}
							  layoutName={"default"}
							  physicalKeyboardHighlight={true}
						/>
					</div>	: '' }
				
				<div className="save_cancel">
					<div className="save">Save</div>
					<div className="cancel" onClick={this.props.hideModal}>Cancel</div>
				</div>
			</div>
		)
	}
}