import React, { Component } from 'react'
import { connect } from 'react-redux';
import {logout} from '../../store/user/actions'

class LogoutContainer extends Component {
  onSubmit = e => {
    this.props.logout()
  }

  render() {
    return (
      <div className='sign-btn' onClick={this.onSubmit}>
        Log out
      </div>
    )
  }
}

export default connect(null, {logout})(LogoutContainer)
