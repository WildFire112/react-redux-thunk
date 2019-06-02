import React, { Component } from 'react'

export default class Auth extends Component {
  constructor(props) {
    super(props)

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onEmailChange(e) {
    this.props.setEmailText(e.target.value)
  }

  onPasswordChange(e) {
    this.props.setPasswordText(e.target.value)
  }

  render() {
    return (
      <div className="sign-block">
        <h2 className="sign-block-title">Sign In</h2>
        <input
          type="text"
          name="login"
          autoComplete="off"
          placeholder="E-mail"
          spellCheck={false}
          className="input"
          value={this.props.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          value={this.props.password}
          onChange={this.onPasswordChange}
        />
        <div className="sign-btn">SIGN IN</div>
      </div>
    )
  }
}
