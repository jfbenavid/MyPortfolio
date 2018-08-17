import React, { Component } from 'react';
import data from './data.eng.json';
import Header from './header/containers/Header';
import Photo from './header/components/photo';
import imgPhoto from '../../images/photo.png';
import Info from './header/components/info';
import Contact from './header/components/contact';
import Main from "./main/containers/main";
import Jobs from "./main/containers/jobs";
// import Footer from "../components/Footer";
import '../../css/styles.styl';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Photo photo={imgPhoto} altPhoto='Fabian Benavides' />
                    <Info {...data.mainInfo}>
                        <Contact {...data.informationDescription} />
                    </Info>
                </Header>
                <Main>
                    <Jobs {...data.jobs} />
                </Main>
                {/* <Jobs />
                <Footer /> */}
            </div>
        );
    }
}