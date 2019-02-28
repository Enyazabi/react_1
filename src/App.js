import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import SignIn from "./Components/LoginComponent";
import ButtonAppBar from "./Components/NavBar";
import SimpleMenu from "./Components/MenuComponent";



const App =() =>(
        <Router history={createBrowserHistory}>
      <div>
            <ButtonAppBar/>
            <SimpleMenu/>
            <Route path="/login" component={SignIn}/>
      </div>


        </Router>
)

export default App
