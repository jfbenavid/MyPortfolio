import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <section className="container">
                {this.props.children}
            </section>
        );
    }
}