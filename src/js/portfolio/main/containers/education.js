import React, { Component } from 'react';
import EducationItem from '../components/education-item';

export default class Education extends Component {
    render() {
        return (
            <section className="education">
                <h2>{this.props.educationDescription}</h2>
                <div>
                    {
                        this.props.educations.map(item => {
                            return <EducationItem
                                key={item.id}
                                {...item}
                            />
                        })
                    }
                </div>
            </section>
        );
    }
}