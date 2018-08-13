import React, { Component } from 'react';
import Job from './Job';

class Footer extends Component {
    render() {
        return (
            <section>
                <h2 className="container" >Experience</h2>
                <div className="container">
                    <Job jobTitle="Software Developer"
                        company="Inalambria Internacional"
                        time="March 2016 - Currently"
                        jobFunctions="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, praesentium ut commodi vitae officiis consequatur dolorum nisi velit quasi, ea tempore adipisci? Odit, adipisci! Dolor beatae quae rerum ducimus autem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, praesentium ut commodi vitae officiis consequatur dolorum nisi velit quasi, ea tempore adipisci? Odit, adipisci! Dolor beatae quae rerum ducimus autem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, praesentium ut commodi vitae officiis consequatur dolorum nisi velit quasi, ea tempore adipisci? Odit, adipisci! Dolor beatae quae rerum ducimus autem." />
                </div>
            </section>
        );
    }
}

export default Footer;