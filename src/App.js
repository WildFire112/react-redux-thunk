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
        {this.props.LoggedIn ?
          <div>Logged In</div>
          :
          <div>Unauthorized</div>
        }
        {console.log(this.props.isLoggedIn)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    LoggedIn: state.user
  }
}

const mapDispatchToProps = {
  isLoggedIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
