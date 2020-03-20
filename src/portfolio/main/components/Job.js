import React from 'react';
import '../styles/job.styl';

export default function Job(props) {
    return (
        <article className="job" >
            <div className="jobTitle">
                <h3>{props.jobTitle}</h3>
                <h4>{props.company}</h4>
                <h5>{props.time}</h5>
            </div>
            <div className="jobFunctions" >
                <span>{props.functionDescription}</span>
                <ul>
                    {props.jobFunctions.map(x => <li key={x.id}>{x.description}</li>)}
                </ul>
                <span>{props.achievementsDescription}</span>
                <ul>
                    {props.jobAchievements.map(x => <li key={x.id}>{x.description}</li>)}
                </ul>
            </div>
        </article>
    );
}