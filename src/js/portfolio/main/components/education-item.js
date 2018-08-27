import React from "react";
import '../styles/education.styl';
import certiprof from '../../../../images/certiprof.png';
import scrum from '../../../../images/scrum-agile-institute.png';
import tecno from '../../../../images/tecno-comfenalco.png';
import platzi from '../../../../images/platzi.png';
import microsoft from '../../../../images/microsoft.png';

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