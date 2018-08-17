import React from 'react';

export default function Job(props) {
    return (
        <article className="job" >
            <div className="jobInfo" >
                <h3>{props.jobTitle}</h3>
                <h4>{props.company}</h4>
                <h5>{props.time}</h5>
            </div>
            <div className="jobFunctions" >
                <p><span>{props.functionDescription}</span> {props.jobFunctions}</p>
                <p><span>{props.achievementsDescription}}</span> {props.jobFunctions}</p>
            </div>
        </article>
    );
}