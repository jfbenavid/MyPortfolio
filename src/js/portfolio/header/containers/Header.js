import React, { Component } from 'react';
// import photo from "../../images/photo.png";

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