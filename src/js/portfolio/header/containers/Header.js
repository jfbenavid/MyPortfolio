import React, { Component } from 'react';
import '../styles/header.styl';
import bg from '../../../../images/space.jpg';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    {this.props.children}
                </div>
            </header>
        );
    }
}