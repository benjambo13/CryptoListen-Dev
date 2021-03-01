import React from 'react'
import Banner from "./Components/Banner"
import Main from "./Components/Main"

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Banner />
        <Main />
      </div>
    ); 
  }
}

export default App;
