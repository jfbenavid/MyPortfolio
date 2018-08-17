import React from 'react';

export default function Photo(props) {
    return (
        <figure className="photo">
            {/* <a href="https://www.linkedin.com/in/jos%C3%A9-fabian-benavides-moreno-1747b092/?locale=en_US" target="_blank"> */}
                <img src={props.photo} alt={props.altPhoto} />
            {/* </a> */}
        </figure>
    );
}