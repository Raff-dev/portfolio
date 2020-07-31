import React, { Component } from 'react';
import { NextArrow } from './NavMenu'
import '../css/Education.scss';

export class Education extends Component {
    displayName = Education.name

    render() {
        return (
            <section className="resume-section" id="Education">
                <div className="next-arrow-wrapper">
                    <span className="title-container">
                        <h2 className="mb-5">Education</h2>
                    </span>
                    <div className="section-content education">
                        <div className="entry">
                            <div className="info">
                                <h3 className="school">Military University of Technology</h3>
                                <p className="localization">Warsaw, Poland</p>
                                <p className="degree">Bachelor of Engineering</p>
                                <p className="specialisation">Computer Science - Data Analysis</p>
                            </div>
                            <div className="flex-shrink-0"><span className="date">October 2018 - February 2022</span></div>
                        </div>
                        <div className="entry">
                            <div className="info">
                                <h3 className="school">Adam Mickiewicz Highschool No. 1</h3>
                                <p className="localization">Kolno, Poland</p>
                                <p className="degree">Math-Physics Program</p>
                            </div>
                            <div className="flex-shrink-0"><span className="date">August 2015 - May 2018</span></div>
                        </div>
                    </div>
                </div>
                <NextArrow id="Skills" />
            </section>
        );
    }
}
