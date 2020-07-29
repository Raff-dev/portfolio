import React, { Component } from 'react';
import { Card } from './Card';

export class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            loading: true,
        };

        fetch('api/Projects/?highlighted=true')
            .then(response => response.json())
            .then(data => {
                this.setState({ projects: data, loading: false });
            })
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Projects.renderCarrousel(this.state.projects);

        return (
            <section class="resume-section" id="Projects">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>
                    {contents}
                </div>
            </section>
        );
    }

    static renderCarrousel(projects) {
        return (
            <div>
                <p>Carrouisel it is</p>
                {projects.map(project =>
                    <Card project={project}></Card>
                )}
            </div>
        );
    }
}

