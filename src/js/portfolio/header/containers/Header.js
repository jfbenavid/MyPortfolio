import React, { Component } from 'react';
import '../styles/header.styl';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container hero">
                    {this.props.children}
                </div>
            </header>
        );
    }
}