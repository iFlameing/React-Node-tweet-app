import React, { Component } from 'react';
import Login from './container/Login/LoginPage';
import Signup from './container/Signup/Signup';
import Logout from './container/Logout/logout'
import Message from './container/message/message'
import Navlink from './container/NavLink/navlink'
import Profile from './container/profile/profile'
import Questions from './container/questionsforsmvdu/questions'
import ResetForm from './components/ForgetPassword/email'
import AddMessage from './container/message/addmessage'
import ParticularMessage from './container/ParticularMessage/particularMessage'
import {Switch,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import NewPassword from './components/ForgetPassword/newpassword';
import Aux from './hoc/aux'

class App extends Component {
  render() {
    return (
      <div>
        <Aux>
        <div>
           <Navlink  logout={this.props.logout} username={this.props.username}/>
        </div>
        <div>
        <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/Login"  component={Login}/>
        <Route exact path="/addMessage" component={AddMessage}/>
        <Route  exact path="/logout"   component={Logout}/>
        <Route  exact path="/profile"  component={Profile}/>
        <Route   exact path="/questions" component={Questions}/>
        <Route exact path = '/resetpassword' component={ResetForm} />
        <Route exact path="/changePassword/:id/:token"  component={NewPassword}/>
        <Route  exact path="/"       component={Message}/>
        <Route exact path="/api/messages/:id/messages" component={ParticularMessage} />
      </Switch>
        </div>

      </Aux>
      </div>
    );
  }
}

const mapStateToProps = state=>({
  logout:state.losin.logout,
  username:state.losin.userName
})



export default withRouter(connect(mapStateToProps,null)(App));
