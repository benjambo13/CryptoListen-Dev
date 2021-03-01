import React from 'react'
import { TextInput, Button } from 'carbon-components-react'
import axios from 'axios';
import auth from '../../Auth/Auth'
import sha256 from 'sha256'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            invalidUsername: false,
            invalidPassword: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }

    async handleSubmit() {
        this.setState({ invalidPassword: false,  invalidUsername: false})

        if (this.state.username !== '' && this.state.password !== '') {
            await axios.get(`/usernameAvailable`, { params: { username: this.state.username }})
                .then((result) => {

                    // If all details are good, create new user and sent to homepage
                    if (result.data && (this.state.password === this.state.confirmPassword)) {
                        const password = sha256.x2(this.state.password)
                        auth.registerNew(() => this.props.history.push('/home'), this.state.username, password)
                    }
                    // If username is not available
                    else if (!result.data) {
                        this.setState({ invalidUsername: true })
                    }
                    // If passwords do not match
                    else if (this.state.password !== this.state.confirmPassword) {
                        this.setState({ invalidPassword: true })
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    render() {
        return (
            <div className = "login-tile">
                <div className = 'login-username'>
                    <TextInput
                        id="register-username"
                        labelText="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        invalidText="Username unavailable"
                        invalid={this.state.invalidUsername}
                    />
                </div>
                <div className = 'login-password'>
                    <TextInput
                        id="register-password"
                        labelText="Password"
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </div>
                <div className = 'login-password'>
                    <TextInput
                        id="register-confirm-password"
                        labelText="Confirm Password"
                        type='password'
                        value={this.state.confirmPassword}
                        onChange={this.handleConfirmPasswordChange}
                        invalidText="Passwords do not match"
                        invalid={this.state.invalidPassword}
                    />
                </div>
                <Button kind="primary" onClick={this.handleSubmit}> Create Account</Button>
            </div>
        )
    }
}

export default withRouter(Register)