import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './header'
import { Main } from './main'
import * as appActs from '../state/modules/language/actions'

class Index extends Component {
  render () {
    const { data, appActions, english } = this.props
    return (
      <>
        <Header
          headerData={data && data.get('header')}
          handleLanguageChange={appActions.changeLanguage}
          english={english}
        />
        <Main mainInfo={data.get('mainInfo')} />
      </>
    )
  }
}

const mapStateToProps = reducers => {
  return { data: reducers.data, english: reducers.english }
}

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActs, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
