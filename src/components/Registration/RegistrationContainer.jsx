import React, { Component } from 'react'
import {connect} from 'react-redux'

import Registration from './Registration';
import { registerNewUser } from '../../store/registration/actions';

class RegistrationContainer extends Component {
  render() {
    return (
      <Registration
        registerNewUser={this.props.registerNewUser}
        errors={this.props.errors}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.registration.errors
  }
}

const mapDispatchToProps = {
  registerNewUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)
