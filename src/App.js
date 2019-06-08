import React, { Component } from 'react';
import './styles/App.css';
import AuthContainer from '../src/components/Auth/AuthContainer'
import RegistrationContainer from '../src/components/Registration/RegistrationContainer'
import LogoutContainer from './components/Logout/LogoutContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { isLoggedIn } from './store/user/actions';
import NavBar from './components/NavBar';

class App extends Component {
  componentDidMount() {
    this.props.isLoggedIn()
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container" >
          <Switch>
          </Switch>
          {test(this.props)}
        </div>
      </Router>
    )
  }
}

const test = (props) => {
  return (
    <div className="Test">
      {props.LoggedIn ?
        <div>Logged In</div>
        :
        <div>Unauthorized</div>
      }
      <dir>
        {props.user.name ?
          <>
            <div>User:</div>
            <div>-{props.user.name}</div>
            <div>-{props.user.idName}</div>
            <div>-{props.user.email}</div>
            <div>-{props.user.status}</div>
          </>
          : ''
        }
      </dir>
      <div>
        {props.registerErrors.length !== 0 ? <div>Registration errors:</div> : ''}
        {props.registerErrors.map(err => {
          return (<div>-{err.msg}</div>)
        })}
        {props.loginErrors.length !== 0 ? <div>Login errors:</div> : ''}
        {props.loginErrors.map(err => {
          return (<div>-{err.msg}</div>)
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    LoggedIn: state.user.isLoggedIn,
    user: state.user.data,
    registerErrors: state.registration.errors,
    loginErrors: state.auth.errors
  }
}

const mapDispatchToProps = {
  isLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
