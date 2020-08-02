import React, { Component } from 'react';
import { Carousel } from '../utilities/Carousel';
import { Section } from '../utilities/Section';

export class Projects extends Component {
    displayName = Projects.name

    constructor(props) {
        super(props);
        this.state = {
            nextSectionName: props.nextSectionName,
            projects: [
                {
                    image: "watplan.png",
                    title: 'WatPlan',
                    subtitle: 'Subitle3',
                    description: 'Description3',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "toster.gif",
                    title: 'Toster',
                    subtitle: 'Subitle3',
                    description: 'Description3',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "lz77.png",
                    title: 'LZ77',
                    subtitle: 'Subitle1',
                    description: 'Description1',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "tetris.gif",
                    title: 'Tetris',
                    subtitle: 'Subitle4',
                    description: 'Description2',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "portfolio.png",
                    title: 'Portfolio',
                    subtitle: 'Subitle5',
                    description: 'Description5',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },

                {
                    image: "boids.gif",
                    title: 'Boids',
                    subtitle: 'Subitle4',
                    description: 'Description2',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
            ],

            loading: true,
        };

        fetch('api/Projects/?highlighted=true')
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false });
            })
    }

    render() {
        let content = <Carousel cards={this.state.projects}></Carousel>;

        return (
            <Section
                content={content}
                sectionName={this.displayName}
                nextSectionName={this.state.nextSectionName}
            />
        );
    }
}

