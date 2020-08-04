import React, { Component } from 'react';
import { TimeLine } from '../utilities/TimeLine'

export class Experience extends Component {
    displayName = Experience.name

    constructor(props) {
        super(props);

        this.state = {
            nextSectionName: props.nextSectionName,
            entries: [
                {
                    title: 'Barista',
                    localization: 'Warsaw, Poland',
                    description: 'SO! COFFEE',
                    content: null,
                    date: 'September 2019 - November 2019',
                },
                {
                    title: 'Bartender',
                    localization: 'London, England',
                    description: "The World's End, Camden",
                    content: null,
                    date: 'July 2019 - September 2019',

                },
            ],

            loading: true,
        };
    }

    render() {
        return (
            <TimeLine
                sectionName={this.displayName}
                nextSectionName={this.state.nextSectionName}
                entries={this.state.entries}
            />
        );
    }
}
