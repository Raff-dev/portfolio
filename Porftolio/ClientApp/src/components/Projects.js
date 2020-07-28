import React, { Component } from 'react';

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
            <div id="Projects">
                <h1>This shoulda been a carrousel.</h1>
                <h1>This shoulda been a carrousel.</h1>
                <h1>This shoulda been a carrousel.</h1>
                <h1>This shoulda been a carrousel.</h1>
                <h1>This shoulda been a carrousel.</h1>
                {contents}
            </div>
        );
    }

    static renderCarrousel(projects) {
        return (
            <div>
                <p>Carrouisel it is</p>
                {projects.map(project =>
                    <Project project={project}></Project>
                )}
            </div>
        );
    }
}

function Project(props) {
    return (
        <div >
            <p>props.project.title</p>
            <p>props.project.description</p>
            {props.project.images.map(imageName =>
                <img src={imageName} alt="Preview image"></img>
            )}
        </div>);
}