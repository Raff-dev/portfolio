import React, { Component } from 'react';

export class Education extends Component {
    displayName = Education.name

    render() {
        return (
            <section className="resume-section" id="Education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Military University of Technology</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Computer Science - Data Analysis</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">October 2018 - February 2022</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Adam Mickiewicz Highschool, Kolno</h3>
                            <div className="subheading mb-3">Math-Physics Program</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2015 - May 2018</span></div>
                    </div>
                </div>
            </section>
        );
    }
}
