import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {createBrowserHistory} from 'history'


import SignIn from "./Components/LoginComponent";
import ButtonAppBar from "./Components/NavBar";
const App =() =>(

        <Router history={createBrowserHistory}>

      <div>
            <ButtonAppBar/>
            <Route path="/login" component={SignIn}/>

      </div>
        </Router>



)

export default App
