import React, { Component } from 'react';
import photo from "../../images/photo.png";

export default class Header extends Component{
    render(){
        return (
            <header className="header">
                <div className="container">
                    <figure className="photo">
                        <a href="https://www.linkedin.com/in/jos%C3%A9-fabian-benavides-moreno-1747b092/?locale=en_US" target="_blank">
                            <img src={photo} alt="Fabian Benavides" />
                        </a>
                    </figure>
                    <div className="info">
                        <h1>Jose Fabian Benavides Moreno</h1>
                        <h3>Software Developer</h3>
                        <div className="contact">
                            <a href="mailto:jfbenavid@gmail.com">
                                <h4>E-mail</h4>
                                jfbenavid@gmail.com
                            </a>
                            <a href="tel:+573132942175">
                                <h4>Phone</h4>
                                +57 313 2942175
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}