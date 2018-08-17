import React from "react";

export default function Contact(props) {
    return (
        <div className="contact">
            <a href="mailto:jfbenavid@gmail.com">
                <h4>{props.email}</h4>
                jfbenavid@gmail.com
            </a>
            <a href="tel:+573132942175">
                <h4>{props.phone}</h4>
                +57 313 2942175
            </a>
        </div>
    );
}