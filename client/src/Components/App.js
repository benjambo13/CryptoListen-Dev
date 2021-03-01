import React from 'react'
import Banner from "./Banner/Banner"
import Main from "./Main"
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Main />
      </div>
    ); 
  }
}

export default withRouter(App);
