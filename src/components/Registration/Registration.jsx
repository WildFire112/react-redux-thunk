import React, { Component } from 'react'

export default class Registration extends Component {
  constructor(props) {
    super(props)
    
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this)
  }

  onEmailChange(e) {
    this.props.setEmailText(e.target.value)
  }

  onPasswordChange(e) {
    this.props.setPasswordText(e.target.value)
  }

  onRepeatPasswordChange(e) {
    this.props.setRepeatPasswordText(e.target.value)
  }

  render() {
    return (
      <div className="sign-block">
        <h2 className="sign-block-title">Sign Up</h2>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
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
        <input
          type="password"
          name="repeat-password"
          placeholder="Repeat password"
          className="input"
          value={this.props.repeatPassword}
          onChange={this.onRepeatPasswordChange}
        />
        <div className="sign-btn">SIGN UP</div>
      </div>
    )
  }
}
