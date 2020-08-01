import React, { Component } from 'react';
import { TimeLine } from '../utilities/TimeLine'

export class Education extends Component {
    displayName = Education.name

    constructor(props) {
        super(props)

        this.state = {
            nextSectionName: props.nextSectionName,
            entries: [
                {
                    title: 'Military University of Technology',
                    localization: 'Warsaw, Poland',
                    description: 'Bachelor of Engineering',
                    content: 'Computer Science - Data Analysis',
                    date: 'October 2018 - February 2022',

                },
                {
                    title: 'Adam Mickiewicz Highschool No. 1',
                    localization: 'Kolno, Poland',
                    description: null,
                    content: 'Math-Physics Program',
                    date: 'August 2015 - May 2018',
                }],

            loading: true,
        };
    }

    render() {
        return (
            <TimeLine
                sectionName={this.displayName}
                nextSectionName={this.state.nextSectionName}
                entries={this.state.entries} />
        );
    }
}
