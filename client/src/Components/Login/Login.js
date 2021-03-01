import React from 'react'
import { TextInput, Button } from 'carbon-components-react'
import { withRouter } from 'react-router-dom'
import auth from '../../Auth/Auth'
import sha256 from 'sha256'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            wrongPassword: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    async handleSubmit() {
        if (this.state.username !== '' && this.state.password !== '') {
            const passwordHash = sha256.x2(this.state.password)
            await auth.login(() => this.props.history.push('/home'), this.state.username, passwordHash)
                .then((result) => {
                    if (!result) {
                        this.setState({ password: '' })
                        this.setState({ wrongPassword: true })
                    }
                })
        }
    }

    render() {
        return (
            <div className = "login-tile">
                <div className = 'login-username'>
                    <TextInput
                        id="username"
                        labelText="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div className = 'login-password'>
                    <TextInput
                        id="password"
                        labelText="Password"
                        type='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        invalidText="Incorrect Details"
                        invalid={this.state.wrongPassword ? true : false}
                    />
                </div>
                <Button kind="primary" onClick={this.handleSubmit}> Log In </Button>
            </div>
        )
    }
}

export default withRouter(Login)