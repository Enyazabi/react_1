import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import SignIn from "./Components/LoginComponent";
import ButtonAppBar from "./Components/NavBar";
import SimpleCard from "./Components/NewsComponent";
import SimpleList from "./Components/ProfilePage";
import { connect } from "react-redux";

const App =() =>(
        <Router history={createBrowserHistory}>
      <div>
            <ButtonAppBar/>
            <Route path="/news" component={SimpleCard}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/profile" component={SimpleList}/>

      </div>
        </Router>
)


function mapStateToProps(state) {
      return{
            user: state.userInfo.user
      }
}
export default connect(mapStateToProps) (App)
