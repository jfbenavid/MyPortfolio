import React from "react";
import '../styles/education.styl';

export default function EducationItem(props) {
    return (
        <a href={props.urlFile} target='_blank'>
            <div className="educationItem">
                <img src={props.instituteLogo} alt={props.institute}></img>
                <h3>{props.title}</h3>
                <h4>{props.institute}</h4>
                <span>{props.endingDate}</span>
            </div>
        </a>
    );
}