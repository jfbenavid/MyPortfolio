import React from 'react';
import '../styles/photo.styl'

export default function Photo(props) {
    return (
        <figure className="photo">
            <img src={props.photo} alt={props.altPhoto} />
        </figure>
    );
}