import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import SignIn from "../Components/LoginComponent";
import ButtonAppBar from "../Components/NavBar";
import SimpleCard from "../Components/NewsComponent";
import SimpleList from "../Components/ProfilePage";
import { connect } from "react-redux";
import userAction from "../Actions/userAction";

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

function mapDispatchToProps(dispatch) {
      return {
            setUserAction: action => {
                  dispatch(userAction(action))
            }
      }
}

export default connect(mapStateToProps,  mapDispatchToProps) (App)
