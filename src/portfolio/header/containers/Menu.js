import React, { Component } from 'react';
import { connect } from "react-redux";
import FontAwesome from 'react-fontawesome';
import '../styles/menu.styl'

class Contact extends Component {
    handleLanguage = event => {
        this.props.dispatch({
            type: 'CHANGE_LANGUAGE'
        })
    }

    render() {
        return (
            <nav className="menu">
                <ul>
                    <li><a onClick={this.handleLanguage}><FontAwesome className="icon" name ="globe" />{this.props.languageText ? 'Español': 'English'}</a></li>
                </ul>
            </nav>
        );
    }
}

export default connect()(Contact)