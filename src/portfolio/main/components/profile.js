import React from 'react';
import '../styles/profile.styl'

export default function Profile(props){
    return (
        <article className="profile">
            <h2>{props.profileDescription}</h2>
            <p>{props.profile}</p>
        </article>
    );
}