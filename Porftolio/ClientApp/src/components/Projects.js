import React, { Component } from 'react';
import { Carousel } from './Carousel';
import { NextArrow } from './NavMenu'


export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    image: "background.png",
                    title: 'Title1',
                    subtitle: 'Subitle1',
                    description: 'Description1',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-2.jpg",
                    title: 'Title2',
                    subtitle: 'Subitle2',
                    description: 'Description2',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-3.jpg",
                    title: 'Title3',
                    subtitle: 'Subitle3',
                    description: 'Description3',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-4.jpg",
                    title: 'Title4',
                    subtitle: 'Subitle4',
                    description: 'Description2',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-5.jpg",
                    title: 'Title5',
                    subtitle: 'Subitle5',
                    description: 'Description5',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-2.jpg",
                    title: 'Title6',
                    subtitle: 'Subitle3',
                    description: 'Description3',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    image: "background-3.jpg",
                    title: 'Title7',
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
        let contents =
            <Carousel cards={this.state.projects}></Carousel>;

        return (
            <section className="resume-section projects" style={{ height: '100vh' }} id="Projects">
                <div className="next-arrow-wrapper">
                    <span className="title-container">
                        <h2 className="mb-5">Projects</h2>
                    </span>
                    {contents}
                </div>
                <NextArrow id="About" />
            </section>
        );
    }
}

