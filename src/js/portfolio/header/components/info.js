import React from 'react';
import '../styles/info.styl'

export default function Info(props) {
    return (
        <div className="info">
            <h1>{props.name}</h1>
            <h3>{props.occupation}</h3>
            {props.children}
        </div>
    );
}