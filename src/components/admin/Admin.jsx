import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
//import Keyboard from 'react-virtual-keyboard';
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
				<Dialog
          open={this.state.open_dialoge}
          onClose={this.hideModal}
					aria-labelledby="form-dialog-title"
					fullWidth
					maxWidth='sm'
        >
					<Add hideModal={this.hideModal}/>
				</Dialog>
				
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
			input:'',
			show_keyboard:'none',
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
			show_keyboard:'block',
		})
	}

	hideKeyboard = () =>{
		this.setState({
			show_keyboard:'none',
		})
	}

	onInputChanged = (data) => {
		this.setState({ input: data });
	}
	 
	onInputSubmitted = (data) => {
		this.setState({ 
			input:"",
			username: data, 
		});
	}

	onChange = (input) => {
		this.setState({
			username: input,
		})
	}

	onKeyPress = (button) => {
		console.log("Button pressed", button);
	}

	render(){
		return(
			<div className="add_dialoge">				
				<div className="keyboard_icon" onClick={this.showKeyboard}>
					<i class="far fa-keyboard"></i>
				</div>									
				<TextField
					outline
					margin="normal"
					id="name"
					name="username"
					label="Username"
					variant="outlined"
					onChange={this.handleChange}
					value={this.state.username}
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
				/>

				<ClickAwayListener onClickAway={this.hideKeyboard}>
					<div className = "keyboard" style={{display:this.state.show_keyboard}}>
						<Keyboard
							onChange={input =>
							this.onChange(input)}
							onKeyPress={button =>
							this.onKeyPress(button)}
							layout={{
								'default': [
								  '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
								  '{tab} b न े ी प ा ल u i o p [ ] \\',
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
						/>
						{/* <Keyboard 
							value={this.state.username}
							name='keyboard'
							options={{
								layout: "qwerty",
								alwaysOpen: true,
								usePreview: false,
								useWheel: false,
								stickyShift: false,
								appendLocally: true,
								color: "light",
								updateOnChange: true,
								initialFocus: true,
								display: {
									"accept" : "Submit"
								}
							}}
							onChange={this.onInputChanged}
							onAccepted={this.onInputSubmitted}
							onCancel={this.hideKeyboard}
							ref={k => this.keyboard = k}
						/> */}
					</div>				
				</ClickAwayListener>
				
				<div className="save_cancel">
					<div className="save">Save</div>
					<div className="cancel" onClick={this.props.hideModal}>Cancel</div>
				</div>
			</div>
		)
	}
}