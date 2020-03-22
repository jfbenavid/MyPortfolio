import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyledHeader } from './styles'
import { Photo } from './photo'
import { Menu } from './menu'
import { Info } from './info'

class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <Menu
          handleLanguageChange={this.handleLanguageChange}
          languageText={this.props.english}
        />
        <Photo {...this.props.headerData.photoInfo} />
        <Info {...this.props.headerData.information} />
      </StyledHeader>
    )
  }

  handleLanguageChange = () => {
    this.props.dispatch({
      type: 'CHANGE_LANGUAGE'
    })
  }
}

const mapStateToProps = state => ({
  data: state.data,
  english: state.english
})

export default connect(mapStateToProps)(Header)
