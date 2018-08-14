import React, { Component } from "react";
import Header from "../components/Header";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import '../../css/styles.styl';

export default class Index extends Component {
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