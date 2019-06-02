import React, { Component } from 'react'

export default class Test extends Component {
  componentDidMount(){
    this.props.fetchGithubData()
  }

  render() {
    if (!this.props.data) {
      return (<div></div>)
    }
    else {
      return (
        <div>
          <div>
            Name: {this.props.data.name}
          </div>
          <br />
          <div>
            Blog: {this.props.data.blog}
          </div>
          <br />
          <div>
            Github Followers: {this.props.data.followers}
          </div>
        </div>
      )
    }
  }
}
