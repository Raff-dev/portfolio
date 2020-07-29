import React, { Component } from 'react';
import { Card } from './Card';
import { Carousel } from './Carousel';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    imageSrc: "background.png",
                    title: 'Title1',
                    subtitle: 'Subitle1',
                    description: 'Description1',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    imageSrc: "background-2.jpg",
                    title: 'Title2',
                    subtitle: 'Subitle2',
                    description: 'Description2',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                },
                {
                    imageSrc: "background-3.jpg",
                    title: 'Title3',
                    subtitle: 'Subitle3',
                    description: 'Description3',
                    links: [
                        'https://github.com/Raff-dev/WAT_Plan',
                        'https://watplan.eu.pythonanywhere.com/home/']
                }],
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
            <section class="resume-section" id="Projects">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>
                    {contents}
                </div>
            </section>
        );
    }
}

