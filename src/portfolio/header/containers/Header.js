import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className='container hero'>{this.props.children}</div>
      </header>
    )
  }
}
