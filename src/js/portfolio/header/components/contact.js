import React from "react";
import '../styles/contact.styl';
// import FontAwesome from 'react-fontawesome';

export default function Contact(props) {
    return (
        <div className="contact">
            <a href="mailto:jfbenavid@gmail.com">
                <h4>{props.contact}</h4>
                jfbenavid@gmail.com
            </a>
            <a href="tel:+573132942175">
                <h4>{props.phone}</h4>
                +57 313 2942175
            </a>
        </div>
    );
}