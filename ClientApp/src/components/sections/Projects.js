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
                    image: "images/watplan.png",
                    title: 'WatPlan',
                    description:
                        "Military University of Technology schedule android app,\
                        written in java, with its own rest api built using \
                        Django Rest Framework, Python",
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "images/toster.gif",
                    title: 'Toster',
                    description: 'Toster is a copy of Twitter implemented in Django framework. \
                    Includes various activities such as posting, commenting, liking, \
                    editing profile and more.',
                    links: [
                        'https://github.com/Raff-dev/Toster']
                },
                {
                    image: "images/lz77.png",
                    title: 'LZ77',
                    description: 'Theory of information and encoding class project, \
                    which is an implementation of LZ77 losseless text data compression algorithm.\
                    Written in c# using ASP.NET.',
                    links: [
                        'https://github.com/Raff-dev/Dictionary-Coder']
                },
                {
                    image: "images/tetris.gif",
                    title: 'Tetris',
                    description: 'My interpretation of classic Tetris game,\
                     written in Java and displayed with the help of JavaFX graphical library.',
                    links: [
                        'https://github.com/Raff-dev/Tetris',]
                },
                {
                    image: "images/portfolio.png",
                    title: 'Portfolio',
                    description: 'This portfolio of mine was created using\
                        React framework to display my work and experience.',
                    links: [
                        'https://github.com/Raff-dev/Portfolio',
                        'https://raff-dev.github.io/Portfolio/']
                },
                {
                    image: "images/boids.gif",
                    title: 'Boids',
                    description: 'Boids is an artificial life simulation, \
                        which aims to replicate behaviour of flocks of birds. \
                        Written in c# language within unity game engine.',
                    links: [
                        'https://github.com/Raff-dev/Boids',]
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
                sectionName={"Projects"}
                nextSectionName={this.state.nextSectionName}
            />
        );
    }
}

