import React, { Component } from 'react';
import Job from '../components/Job';

export default class Jobs extends Component {

    render() {
        return (
            <section>
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