import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss';
import App from './Components/App';
import Index from './Components/Login/Index'
import ProtectedRoute from './Auth/ProtectedRoute'
import Mobile from './Components/Mobile/Mobile'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {isMobile ? <Mobile /> : <Route exact path='/' component={Index}/>}
        <ProtectedRoute exact path='/home' component={App}/>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
