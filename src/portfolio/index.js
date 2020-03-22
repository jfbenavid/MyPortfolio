import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header'
// import Experience from './main/containers/experience';
// import Profile from './main/components/profile';
// import Education from './main/containers/education';
// import Menu from './header/containers/Menu';
// import './styles.styl';
// import 'font-awesome/css/font-awesome.min.css';

class Index extends Component {
  render () {
    return (
      <>
        <Header headerData={this.props.data && this.props.data.header} />
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
