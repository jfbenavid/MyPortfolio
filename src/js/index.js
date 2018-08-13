import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/styles.styl';
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jobs />
                <Footer />
            </div>
        );
    }
}

render(<Index />, document.body);