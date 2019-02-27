import React, { Component } from 'react';

import './App.css';

import SignIn from "./Components/LoginComponent";
import ButtonAppBar from "./Components/NavBar";
class App extends Component {
  render() {
    return (
      <div >
            <ButtonAppBar/>
          <SignIn/>
      </div>
    );
  }
}

export default App;
