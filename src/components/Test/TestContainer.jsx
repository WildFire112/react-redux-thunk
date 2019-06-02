import React, { Component } from 'react'
import { connect } from 'react-redux';
import Test from './Test';
import { fetchGithubData } from '../../store/test/actions'

class TestContainer extends Component {
  render() {
    return (
      <Test
        fetchGithubData={this.props.fetchGithubData}
        data={this.props.data}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.github
  }
}

const mapDispatchToProps = {
  fetchGithubData
}


export default connect(mapStateToProps, mapDispatchToProps)(TestContainer)
