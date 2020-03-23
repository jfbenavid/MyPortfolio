import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header'
import { Main } from './main'
// import Experience from './main/containers/experience';
// import Profile from './main/components/profile';
// import Education from './main/containers/education';

class Index extends Component {
  render () {
    return (
      <>
        <Header headerData={this.props.data && this.props.data.header} />
        <Main {...this.props.data.mainInfo} />
      </>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.data,
    english: state.english
  }
}

export default connect(mapStateToProps)(Index)
