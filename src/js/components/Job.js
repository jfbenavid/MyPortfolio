import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <article className="job" >
                <div className="jobInfo" >
                    <h3>{this.props.jobTitle}</h3>
                    <h4>{this.props.company}</h4>
                    <h5>{this.props.time}</h5>
                </div>
                <div className="jobFunctions" >
                    <p><span>Functions:</span> {this.props.jobFunctions}</p>
                    <p><span>Achievements:</span> {this.props.jobFunctions}</p>
                </div>
            </article>
        );
    }
}

export default Footer;