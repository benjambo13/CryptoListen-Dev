import React from 'react'
import Login from './Login'
import Register from './Register'

import { Tabs, Tab } from 'carbon-components-react'

import './Index.scss'

class Index extends React.Component {
    render() {
        return (
            <div className='index-container'>
                <h1 className='title'>CryptoListen</h1>
                <Tabs className='index-tabs' type='container'>
                    <Tab id="tab-1" label="Login">
                        <Login />
                    </Tab>
                    <Tab id="tab-2" label="Create Account">
                        <Register />
                    </Tab>
                </Tabs>
                <h5 className='warning'>IMPORTANT: YOU MUST DISABLE ADBLOCKER TO USE THIS WEBSITE</h5>
            </div>
        )
    }
}

export default Index