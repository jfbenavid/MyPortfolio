import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './header'
import { Main } from './main'
import * as appActs from '../state/modules/language/actions'
import englishData from 'portfolio/data.eng.json'
import spanishData from 'portfolio/data.esp.json'

class Index extends Component {
  componentDidUpdate () {
    const { appActions, english, data } = this.props
    const json = english ? englishData : spanishData

    if (
      (english && !data.get('isEnglish')) ||
      (!english && data.get('isEnglish'))
    ) { appActions.updateData(json) }
  }

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

const mapStateToProps = reducers => ({
  data: reducers.data,
  english: reducers.english
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActs, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
