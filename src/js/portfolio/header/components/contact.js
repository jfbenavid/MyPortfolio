import React from "react";
import '../styles/contact.styl';
import FontAwesome from 'react-fontawesome';

export default function Contact(props) {
    return (
        <div className="contact">
            <a href="mailto:jfbenavid@gmail.com">
                <h4><FontAwesome name ="envelope" /> {props.emailDescription}</h4>
                jfbenavid@gmail.com
            </a>
            <a href="tel:+573132942175">
                <h4><FontAwesome name ="phone" /> {props.phoneDescription}</h4>
                +57 313 2942175
            </a>
            <a href={props.socialNetworks.linkedin} target="_blank" >
                <FontAwesome name ="linkedin" size="2x" />
            </a>
            <a href={props.socialNetworks.github} target="_blank" >
                <FontAwesome name ="github" size="2x" />
            </a>
        </div>
    );
}