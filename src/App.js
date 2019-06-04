import React, { Component } from 'react';
import './styles/App.css';
import AuthContainer from '../src/components/Auth/AuthContainer'
import RegistrationContainer from '../src/components/Registration/RegistrationContainer'
import LogoutContainer from './components/Logout/LogoutContainer';
import { isLoggedIn } from './store/user/actions';
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.props.isLoggedIn()
  }

  render() {
    return (
      <div className="container" >
        <h1>Redux test</h1>
        <div className="sign-container">
          <AuthContainer />
          <RegistrationContainer />
          <LogoutContainer />
        </div>
        <div className="Test">
          {this.props.LoggedIn ?
            <div>Logged In</div>
            :
            <div>Unauthorized</div>
          }
          <dir>
            {this.props.user.name ?
              <>
                <div>User:</div>
                <div>-{this.props.user.name}</div>
                <div>-{this.props.user.idName}</div>
                <div>-{this.props.user.email}</div>
                <div>-{this.props.user.status}</div>
              </>
              : ''
            }
          </dir>
          <div>
            {this.props.registerErrors.length !== 0 ? <div>Registration errors:</div> : ''}
            {this.props.registerErrors.map(err => {
              return (<div>-{err.msg}</div>)
            })}
            {this.props.loginErrors.length !== 0 ? <div>Login errors:</div> : ''}
            {this.props.loginErrors.map(err => {
              return (<div>-{err.msg}</div>)
            })}
          </div>
        </div>
      </div>
    )
  }
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
