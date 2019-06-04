import React, { Component } from 'react'
import { connect } from 'react-redux';

import { postUser } from '../../store/auth/actions';
import Auth from './Auth';

class AuthContainer extends Component {
  render() {
    return (
      <Auth
        postUser={this.props.postUser}
        errors={this.props.errors}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.auth.errors
  }
}

const mapDispatchToProps = {
  postUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
