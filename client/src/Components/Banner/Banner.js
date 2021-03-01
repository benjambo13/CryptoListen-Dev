import React from 'react'
import "./Banner.scss"
import auth from '../../Auth/Auth'
import { withRouter } from 'react-router-dom'
import { Button } from 'carbon-components-react'

class Banner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.setState({ username: auth.getUsername() })
    }

    render() {
        return (
            <div className="banner">
                <h1 className="heading">
                    CryptoListen
                </h1>
                <Button className="banner-logout" kind='danger' onClick={() => { auth.logout(() => {this.props.history.push("/")}) }}>Log Out</Button>
                <h3 className="banner-username">{this.state.username}</h3>
                
            </div>
        )
    }
  }
  
export default withRouter(Banner);