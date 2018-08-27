import React, { Component } from 'react';
import data from './data.eng.json';
import Header from './header/containers/Header';
import Photo from './header/components/photo';
import imgPhoto from '../../images/photo.png';
import Info from './header/components/info';
import Contact from './header/components/contact';
import Main from "./main/containers/main";
import Experience from "./main/containers/experience";
import Profile from "./main/components/profile";
import Education from "./main/containers/education";
import './styles.styl';
import 'font-awesome/css/font-awesome.min.css';

export default class Index extends Component {

    render() {
        return (
            <div>
                <Header>
                    <Photo photo={imgPhoto} altPhoto='Fabian Benavides' />
                    <Info {...data.mainInfo}>
                        <Contact {...data.information} />
                    </Info>
                </Header>
                <Main>
                    <Profile {...data.profile}/>
                    <Experience {...data.jobs} />
                    <Education {...data.education} />
                </Main>
            </div>
        );
    }
}