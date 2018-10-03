import React, { Component } from 'react';
import Job from '../components/Job';
import '../styles/experience.styl';

export default class Experience extends Component {

    render() {
        return (
            <section className="experience">
                <h2>{this.props.experienceDescription}</h2>
                <div>
                    {
                        this.props.jobs.map(item => {
                            return <Job
                                key={item.id}
                                functionDescription={this.props.functionDescription}
                                achievementsDescription={this.props.achievementsDescription}
                                {...item}
                            />
                        })
                    }
                </div>
            </section>
        );
    }
}