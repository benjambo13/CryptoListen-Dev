import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './Auth'

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => { 
            return auth.isAuthenticated() ? <Component {...props}/> : <Redirect to={{pathname: "/"}}/>
        }}/>
    )
}

export default ProtectedRoute